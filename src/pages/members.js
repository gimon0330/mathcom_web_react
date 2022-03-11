import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import members from '../datas/members';
import miju_yah from '../images/profiles/miju_yah.jpg';

export default class Home extends Component {
    render() {
        const dongjang = members.map(
            (one, index) => (
                one.dongjang &&
                <Col key={index} sm={12} style={{ marginTop: 20}}>
                    <Row>
                        <Col sm="auto">
                            <img src={one.img} width={200}/>
                        </Col>
                        <Col xm={6}>
                            <h1>{one.name}</h1>
                            <h2>{one.role}</h2>
                            <h3>{one.description}</h3>
                            <Button variant="github_btn" href={one.github}>깃허브 확인하기</Button>
                        </Col>
                    </Row>
                </Col>
            )
        )

        const membs = members.map(
            (one, index) => (
                !one.dongjang &&
                <Col key={index} xl={6} xm={6} style={{ marginTop: 20}}>
                    <Row>
                        <Col sm="auto">
                            <img src={one.img} width={200}/>
                        </Col>
                        <Col xm={6}>
                            <h1>{one.name}</h1>
                            <h2>{one.role}</h2>
                            <h3>{one.description}</h3>
                            {
                                one.github &&
                                <Button variant="github_btn" href={one.github}>깃허브 확인하기</Button>
                            }
                        </Col>
                    </Row>
                </Col>
            )
        )

        return (
            <>
                <Title title="MATH COM" subtitle="부산일과학고등학교 인공지능 동아리" className="Title-gradient" />
                <Container style={{ marginTop: 40 }}>
                    <h1 style={{ fontSize: 45 }}>동아리 담당 선생님</h1>
                    <Card className="project-card flex-row flex-wrap">
                        <Col xs={3}>
                            <Card.Img variant="top" src={miju_yah} style={{ marginTop: '1rem', marginBottom: "1rem"}}/>
                        </Col>
                        <Col xs={9}>
                            <Card.Body>
                                <Card.Title className='project-card-title'>임미주 선생님</Card.Title>
                                <Card.Text className='project-card-dsec'>.</Card.Text>
                                <Button variant="insta_btn" href="https://www.instagram.com/miju_yah/?hl=ko">인스타그램 확인하기</Button>
                            </Card.Body>
                        </Col>
                    </Card>
                </Container>

                <Container>
                    <h1 style={{ fontSize: 45}}>역대 동아리장</h1>
                    <Row style={{ marginTop: 20}}>
                        {dongjang}
                    </Row>
                </Container>

                <Container style={{ marginTop: 45, marginBottom: 50 }}>
                    <h1 style={{ fontSize: 45}}>All Members</h1>
                    <Row style={{ marginTop: 20}}>
                        {membs}
                    </Row>
                </Container>
            </>
        );
    }
}
