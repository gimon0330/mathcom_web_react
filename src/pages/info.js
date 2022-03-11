import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Row, Col, Button } from 'react-bootstrap';

import mathcom_logo from '../images/logo.png';

export default class Home extends Component {
  render() {
    return (
      <>
        <Title title="MATH COM" subtitle="부산일과학고등학교 인공지능 동아리" className="Title-gradient" />
        <Container style={{ marginTop: 40 }}>
          <Container className="ct">
            <Row>
                <img src={mathcom_logo} width={400}/>
                <Col sm={6} xm={12}>
                    <h1>MATHCOM - BSIS 정보 수학 융합동아리</h1>
                    <h3>안녕하세요?</h3>
                    <Row xm={12}>
                        <Button variant="insta_btn" href="https://www.instagram.com/mathcomofficial/">
                            Instagram 확인하기
                        </Button>
                        <Button variant="github_btn" href="https://github.com/MATHCOM-BSIS">
                            깃허브 확인하기
                        </Button>
                    </Row>
                </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
