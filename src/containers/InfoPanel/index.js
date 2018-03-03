import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoPanel from '../../components/InfoPanel';
import { getSelectedNation, getNationById } from '../../reducers/nation';
import { getCurrentPlayer, getPlayerById } from '../../reducers/player';

const InfoPanelContainer = ({ ...props }) => (
    <InfoPanel
        {...props}
    />
);

export default connect(
    state => {
        const nation = getSelectedNation(state);

        return {
            currentPlayer: getCurrentPlayer(state),
            ruler: nation ? getPlayerById(state, nation.player) : null,
            nation
        };
    },
    dispatch => {
        return bindActionCreators(
            {

            },
            dispatch
        );
    }
)(InfoPanelContainer);
