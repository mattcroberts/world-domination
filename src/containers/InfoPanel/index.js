import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoPanel from '../../components/InfoPanel';
import { getSelectedNation, getNationById } from '../../reducers/nation';
import { getCurrentPlayer } from '../../reducers/player';

const InfoPanelContainer = ({ ...props }) => (
    <InfoPanel
        {...props}
    />
);

export default connect(
    state => {
        return {
            player: getCurrentPlayer(state),
            nation: getNationById(state, getSelectedNation(state))
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
