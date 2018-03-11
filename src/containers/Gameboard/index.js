import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dummy from '../../components/Dummy';

import map from '../../maps/out.json';
import { nationClick, nationInit } from '../../actions';
import { getPlayerById } from '../../reducers/player';

const mapData = map.childs[2].childs
    .filter(child => child.name === 'path')
    .map(child => ({
        data: child.attrs.d
    }));

const GameboardContainer = ({ nations, ...otherProps }) => {
    const nationsWithMap = Object.entries(nations).reduce(
        (acc, [id, nation]) => {
            return Object.assign(acc, {
                [id]: Object.assign(nation, {
                    map: mapData[id].data
                })
            });
        },
        {}
    );
    return <Dummy nations={nationsWithMap} {...otherProps} />;
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
    return bindActionCreators({ nationClick, nationInit }, dispatch);
})(GameboardContainer);
