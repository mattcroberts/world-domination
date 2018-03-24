import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoPanel from '../../components/InfoPanel';
import {
    calculateAttackTargets,
    getSelectedNation
} from '../../reducers/nation';

import { fetchData } from '../../actions/async';
import { getCurrentPlayer, getPlayerById } from '../../reducers/player';

// const InfoPanelContainer = ({ request, ...props }) => {
//     return <InfoPanel {...props} />;
// };

class InfoPanelContainer extends React.Component {
    componentDidMount() {
        this.props.fetchData('http://bbc.co.uk');
    }
    render() {
        return <InfoPanel {...this.props} />;
    }
}

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
    // return {
    //     fetchData: url => dispatch(fetchData(url))
    // };
    return bindActionCreators({ fetchData }, dispatch);
})(InfoPanelContainer);
