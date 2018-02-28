import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Gameboard from '../../components/Gameboard';
import map from '../../maps/out.json';
import { nationClick, nationInit } from '../../actions';
import { getPlayerById } from '../../reducers/player';

const mapData = map.childs[2].childs
    .filter(child => child.name === 'path')
    .map(child => ({
        data: child.attrs.d
    }));

const scale = Math.min(
    window.innerWidth / 237.823,
    window.innerHeight / 189.585
);

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
    return <Gameboard nations={nationsWithMap} scale={scale} {...otherProps} />;
};

export default connect(
    (state, ownProps) => {
        return Object.assign({}, ownProps, {
            nations: Object.entries(state.nations)
                .map(([nationId, nation]) => {
                    const player = getPlayerById(state, nation.player);
                    return {
                        ...nation,
                        id: nationId,
                        fillColor: player ? player.color : undefined
                    };
                })
                .reduce(
                    (acc, nation) => ({ ...acc, [nation.id]: { ...nation } }),
                    {}
                )
        });
    },
    dispatch => {
        return bindActionCreators({ nationClick, nationInit }, dispatch);
    }
)(GameboardContainer);
