import React, { Component } from 'react';
import './saver.css';

export default class Saver extends Component {
    render() {
        return (
            <div className='container saver'>
                <input type="button" value="Gerar relatório" onClick={this.props.handleSave} />
            </div>
        )
    }
}
