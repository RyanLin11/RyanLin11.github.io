import React from 'react';
import './Topic.css';
import {Container, Row, Col} from 'react-bootstrap';

class GridDisplay extends React.Component {
    render() {
        return (
            <Container className='display-container'>
                <Row>
                    <Col>
                        <h1 className='title'>{this.props.title}</h1>
                    </Col>
                </Row>
                {this.props.children}
            </Container>
        )
    }
}

export default GridDisplay;