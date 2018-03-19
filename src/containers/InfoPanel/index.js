import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoPanel from '../../components/InfoPanel';
import {
    calculateAttackTargets,
    getSelectedNation
} from '../../reducers/nation';
import { getCurrentPlayer, getPlayerById } from '../../reducers/player';

const InfoPanelContainer = ({ ...props }) => <InfoPanel {...props} />;

export const mapStateToProps = state => {
    const selectedNation = getSelectedNation(state);

    return {
        currentPlayer: getCurrentPlayer(state),
        ruler: selectedNation
            ? getPlayerById(state, selectedNation.player)
            : null,
        attackTargets: selectedNation
            ? calculateAttackTargets(state, selectedNation.id)
            : [],
        selectedNation
    };
};
export default connect(mapStateToProps, dispatch => {
    return bindActionCreators({}, dispatch);
})(InfoPanelContainer);
