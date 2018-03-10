import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoPanel from '../../components/InfoPanel';
import {
    calculateAttackTargets,
    getSelectedNation,
    getNationById
} from '../../reducers/nation';
import { getCurrentPlayer, getPlayerById } from '../../reducers/player';

const InfoPanelContainer = ({ ...props }) => <InfoPanel {...props} />;

export default connect(
    state => {
        const selectedNation = getSelectedNation(state);

        return {
            currentPlayer: getCurrentPlayer(state),
            ruler: selectedNation
                ? getPlayerById(state, selectedNation.player)
                : null,
            targets: selectedNation
                ? calculateAttackTargets(state, selectedNation.id)
                : [],
            selectedNation
        };
    },
    dispatch => {
        return bindActionCreators({}, dispatch);
    }
)(InfoPanelContainer);
