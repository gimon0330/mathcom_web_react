import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <>
        <footer className="Footer">
          <Container fluid="sm" className="text-center text-md-left">
            <Row>
              <Col md={5} className="mt-md-0 mt-3">
                <h4 className="text-uppercase">
                  MATHCOM
                </h4>
                <p>
                  부산일과학고등학교 정보 수학 융합 동아리
                </p>
              </Col>
              <Col md={2}>
                <h5>사이트</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">홈</a>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <h5>프로젝트</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/projects/ticktaktoe">Perfect-Ticktaktoe</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="Footer-copyright text-center">
              Copyright © 2021 MATHCOM All rights reserved.
            </div>
          </Container>
        </footer>
      </>
    );
  }
}