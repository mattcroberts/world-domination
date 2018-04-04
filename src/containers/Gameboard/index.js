import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GameboardWrapper from '../../components/GameboardWrapper';

import map from '../../maps/europe.json';
import { nationClick } from '../../actions/nation';
import { getPlayerById } from '../../reducers/player';

export const GameboardContainer = ({ nations, ...otherProps }) => {
    const nationsWithMap = Object.entries(nations).reduce(
        (acc, [id, nation]) => {
            return Object.assign(acc, {
                [id]: Object.assign(nation, {
                    map: map[id].path
                })
            });
        },
        {}
    );
    return <GameboardWrapper nations={nationsWithMap} {...otherProps} />;
};

export const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        ...{
            nations: Object.entries(state.nations)
                .map(([, nation]) => {
                    const player = getPlayerById(state, nation.player);
                    return {
                        ...nation,
                        fillColor: player ? player.color : undefined
                    };
                })
                .reduce(
                    (acc, nation) => ({
                        ...acc,
                        [nation.id]: nation
                    }),
                    {}
                )
        }
    };
};

export default connect(mapStateToProps, dispatch => {
    return bindActionCreators({ nationClick }, dispatch);
})(GameboardContainer);
