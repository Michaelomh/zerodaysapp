import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class WeekPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (
            <div className="weekPanel-root" >
                <Row>
                    <Col>
                        <div className="halves-circle" id="btyr"></div>
                    </Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                    <Col><div className="halves-circle" id="btyr"></div></Col>
                </Row>
            </div>

        );
    }
}

export default WeekPanel;