import React from 'react';
import ReactDOM from 'react-dom';

import Gameboard from './Gameboard';

export default class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.state = {
            offsetWidth: null
        };
    }

    onResize() {
        if (this.element) {
            const node = ReactDOM.findDOMNode(this.element);
            this.setState({
                offsetWidth: node.offsetWidth,
                offsetHeight: node.offsetHeight
            });
        }
    }

    render() {
        const { nationsWithMap, ...otherProps } = this.props;
        const component = this.state.offsetWidth ? (
            <Gameboard
                outerWidth={this.state.offsetWidth}
                outerHeight={this.state.offsetHeight}
                nations={nationsWithMap}
                {...otherProps}
            />
        ) : null;
        return (
            <div className="Dummy" ref={element => (this.element = element)}>
                {component}
            </div>
        );
    }

    componentDidMount() {
        this.onResize();
    }

    componentWillMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }
}
