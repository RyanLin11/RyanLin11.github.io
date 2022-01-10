import React from 'react';
import {Container} from 'react-bootstrap';
import './BlockItem.css';

class BlockItem extends React.Component {
    render() {
        let style = {
            position: 'relative',
            backgroundImage: `url(${this.props.imageUrl})`,
            'background-position': 'center',
            'background-size': 'cover',
            width: '100%',
            height: '0',
            'padding-bottom': '100%',
            border: '1px solid black',
        };
        return (
            <a href={this.props.link} target='_blank'>
            <div class='spoiler' style={style}>
                <div className='description'>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
            </a>
        )
    }
}

export default BlockItem;