import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ButtonPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (
            <div className="buttonPanel-root" >
                <Row>
                    <Col className="button-1">
                    <div>Button 1</div>
                    </Col>
                    <Col className="button-2">Button 2</Col>
                </Row>
                <Row>
                    <Col className="button-3">Button 3</Col>
                    <Col className="button-4">Button 4</Col>
                </Row>
            </div>
        );
    }
}

export default ButtonPanel;