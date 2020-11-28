import React from 'react';
import { Container , Row , Col} from 'react-bootstrap';
function Stats(props){
    return (
            <Row>
                <Col>
                <h2>{props.stats.stat.name}</h2> 
                </Col>
                <Col>
                <p>{props.stats.base_stat}</p>
                </Col>
            </Row>
    )
}

export default Stats;