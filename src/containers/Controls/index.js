import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    calculateAttackTargets,
    getSelectedNation,
    nationCanBeAttacked
} from '../../reducers/nation';
import { attack, setNationRuler } from '../../actions/nation';
import { endTurn } from '../../actions/game';

import Controls from '../../components/Controls';

const ControlsContainer = ({ attack, endTurn, setNationRuler, ...props }) => (
    <Controls
        onEndTurnClick={() => endTurn(props.currentPlayerId)}
        onChooseStartNationClick={() => {
            setNationRuler(props.currentPlayerId, props.selectedNation.id);
            endTurn(props.currentPlayerId);
        }}
        onAttackClick={() => {
            attack(props.currentPlayerId, props.selectedNation);
            endTurn(props.currentPlayerId);
        }}
        {...props}
    />
);

export const mapStateToProps = state => {
    const selectedNation = getSelectedNation(state);
    return {
        currentPlayerId: state.game.currentPlayerId,
        selectedNation,
        controlEnabled: {
            attack: nationCanBeAttacked(state, selectedNation)
        },
        attackTargets: selectedNation
            ? calculateAttackTargets(state, selectedNation.id)
            : []
    };
};

export default connect(mapStateToProps, dispatch => {
    return bindActionCreators(
        {
            attack,
            endTurn,
            setNationRuler
        },
        dispatch
    );
})(ControlsContainer);
