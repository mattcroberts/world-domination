import _merge from 'lodash.merge';
import { ACTIONS } from '../../actions/nation';
import map from '../../maps/out.json';
import borders from '../../maps/borders.json';
import { getCurrentPlayer } from '../player';

const ATTACK_COEFFICIENT = 2;
const MIN_RESERVE_TROOPS = 1;

const mapData = map.childs[2].childs
    .filter(child => child.name === 'path')
    .map((child, i) => ({
        borders: borders[i] || [],
        data: child.attrs.d
    }));

const defaultState = mapData.reduce((acc, nation, i) => {
    return {
        ...acc,
        [i]: {
            id: i,
            selected: false,
            player: null,
            borders: nation.borders,
            troops: 0
        }
    };
}, {});

export const getSelectedNation = state => {
    const [nationId] =
        Object.entries(state.nations).find(([, nation]) => nation.selected) ||
        [];
    return state.nations[nationId] ? state.nations[nationId] : null;
};

export const getNationById = (state, nationId) =>
    state.nations[nationId] || null;

const hasPlayer = (state, nationId) => {
    const borderNation = getNationById(state, nationId);

    return borderNation.player !== null;
};

export const calculateAttackTargets = (state, nationId) => {
    const nation = getNationById(state, nationId);

    if (nation.troops < 2) {
        return [];
    }

    return getNationById(state, nationId).borders.filter(nation =>
        hasPlayer(state, nation)
    );
};

export const calculateInvasionTargets = (state, nationId) => {
    return getNationById(state, nationId).borders.filter(
        nation => !hasPlayer(state, nation)
    );
};

const resetSelected = state => {
    return Object.entries(state)
        .map(([, nation]) => ({ ...nation, selected: false }))
        .reduce((acc, nation) => ({ ...acc, [nation.id]: nation }), {});
};

/**
 * Nation can be attacked if the nations that border it are occupied by the current player and have > 1 troops
 *
 * @param {Object} state
 * @param {Object} nation
 *
 * @return {boolean}
 */
export const nationCanBeAttacked = (state, nation) => {
    const currentPlayerId = getCurrentPlayer(state).id;
    return (
        nation !== null &&
        nation.player !== currentPlayerId &&
        nation.borders.filter(nationId => {
            const n = getNationById(state, nationId);
            return n.player === currentPlayerId && n.troops > 1;
        }).length > 0
    );
};

const calculateAttackResult = (
    state,
    { aggressorPlayerId, defendingNation }
) => {
    const defendingTroops = defendingNation.troops;
    const skirmishes = defendingNation.borders
        .map(nationId => state[nationId])
        .filter(nation => aggressorPlayerId === nation.player)
        .map(({ id, troops: aggressorTroops }) => {
            return {
                id,
                defenderTroops: Math.max(
                    defendingTroops - aggressorTroops / ATTACK_COEFFICIENT,
                    0
                ),
                aggressorTroops: Math.max(
                    MIN_RESERVE_TROOPS,
                    aggressorTroops - defendingTroops * ATTACK_COEFFICIENT
                )
            };
        });
    console.log(skirmishes);
    const result = Object.assign(
        {
            [defendingNation.id]: {
                troops: skirmishes[0].defenderTroops,
                player:
                    skirmishes[0].defenderTroops > 0
                        ? defendingNation.player
                        : aggressorPlayerId
            }
        },
        skirmishes
            .map(({ id, aggressorTroops }) => ({
                [id]: { troops: aggressorTroops }
            }))
            .reduce((acc, nation) => {
                return {
                    ...acc,
                    ...nation
                };
            })
    );
    console.log(result);
    return result;
};

export default (state = defaultState, action) => {
    switch (action.type) {
    case ACTIONS.SET_RULER:
        return Object.assign({}, state, {
            [action.nation.id]: {
                ...state[action.nation.id],
                player: action.playerId,
                selected: false,
                troops: 100
            }
        });
    case ACTIONS.CLICK:
        return Object.assign({}, resetSelected(state), {
            [action.nation.id]: {
                ...state[action.nation.id],
                selected: !state[action.nation.id].selected
            }
        });
    case ACTIONS.ATTACK:
        return _merge(
            {},
            resetSelected(state),
            calculateAttackResult(state, action)
        );
    default:
        return state;
    }
};
