import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    calculateAttackTargets,
    calculateInvasionTargets
} from '../../reducers/nation';
import { endTurn, setNationRuler } from '../../actions';
import Controls from '../../components/Controls';

const ControlsContainer = ({ endTurn, setNationRuler, ...props }) => (
    <Controls
        onEndTurnClick={() => endTurn(props.currentPlayerId)}
        onChooseStartNationClick={() => {
            setNationRuler(props.currentPlayerId, props.selectedNationId);
            endTurn(props.currentPlayerId);
        }}
        {...props}
    />
);

export const mapStateToProps = state => {
    const { id: nationId } =
        Object.values(state.nations).find(({ selected }) => selected) || {};
    return {
        currentPlayerId: state.game.currentPlayerId,
        selectedNationId: nationId ? nationId : null,
        attackTargets: nationId ? calculateAttackTargets(state, nationId) : [],
        invasionTargets: nationId
            ? calculateInvasionTargets(state, nationId)
            : []
    };
};

export default connect(mapStateToProps, dispatch => {
    return bindActionCreators(
        {
            endTurn,
            setNationRuler
        },
        dispatch
    );
})(ControlsContainer);
