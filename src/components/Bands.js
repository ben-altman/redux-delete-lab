import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBand = () => {
        return this.props.bands.map( band => (
            <Band deleteBand={this.props.delete}
                key={band.id}
                band={band}
            />
        ))
    }

    render () {
        return <ul>
            {this.renderBand()}
        </ul>;
    }
};

export default Bands;
