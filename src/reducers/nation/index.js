import { actions } from '../../actions';
import map from '../../maps/out.json';
const mapData = map.childs[2].childs
    .filter(child => child.name === 'path')
    .map(child => ({
        data: child.attrs.d
    }));

const defaultState = mapData.reduce((acc, nation, i) => {
    return {
        ...acc,
        [i]: {
            selected: false,
            player: null
        }
    };
}, {});

export const getSelectedNation = (state) => {
    const nationId = '';
    return state.nations[nationId] ? state.nations[nationId] : null;
};

export const getNationById = (state, nationId) => state.nations[nationId] || null;

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions['NATION_SET-RULER']:
            return Object.assign({}, state, {
                [action.nation.id]: {
                    ...state[action.nation.id],
                    player: action.playerId,
                    selected: false
                }
            });
        case actions.NATION_INIT:
            return Object.assign({}, state, {
                [action.nation.id]: {
                    ...state[action.nation.id],
                    selected: false
                }
            });
        case actions.NATION_CLICK:
            return Object.assign({}, state, {
                [action.nation.id]: {
                    ...state[action.nation.id],
                    selected: !state[action.nation.id].selected
                }
            });

        default:
            return state;
    }
};
