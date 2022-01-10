import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './GridDisplay.css';

class GridDisplay extends React.Component {
    render() {  
        return (
            <Container>
                <Row className="justify-content-center grid-container">
                    {React.Children.map(this.props.children, gridItem => {
                        return (
                            <Col xs='12' md='6' xl='4' className='grid-col'>
                                {gridItem}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default GridDisplay;