import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endTurn } from '../../reducers/game';
import { calculateInvasionTargets } from '../../reducers/nation';
import { setNationRuler } from '../../actions';
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

export default connect(
    state => {
        const { id: nationId } = Object.values(state.nations).find(({ selected }) => selected) || { };
        return {
            currentPlayerId: state.game.currentPlayerId,
            selectedNationId: nationId ? nationId : null,
            invasionTargets: nationId ? calculateInvasionTargets(state, nationId) : []
        };
    },
    dispatch => {
        return bindActionCreators(
            {
                endTurn,
                setNationRuler
            },
            dispatch
        );
    }
)(ControlsContainer);
