import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Title from '../components/title';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import members from '../datas/members';
import projects from '../datas/projects';

export default class Home extends Component {
    render() {
        const proj_progress_color = ['red', 'green', 'blue']
        const proj_progress_desc = ["개발 중단된 프로젝트입니다.", "개발 중인 프로젝트입니다.","개발 완료된 프로젝트입니다."]

        const membs = members.slice(0, 6).map(
            (one, index) => (
                <Col key={index} xl={4} lg={6} md={6}>
                    <Card className="Members-card">
                    <Card.Img variant="top" src={one.img} />
                    <Card.Body className="Members-card-body text-center">
                        <Card.Title className="Members-card-title">{one.name}</Card.Title>
                        <Card.Subtitle className="Members-card-sub">{one.role}</Card.Subtitle>
                        <Card.Text className="Members-card-desc pt-2">
                        {one.description}
                        </Card.Text>
                        {
                        one.github && <Card.Link href={one.github} title="GitHub 링크" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Card.Link>
                        }
                    </Card.Body>
                    </Card>
                </Col>
            )
        )

        const projecs = projects.slice(0, 4).map(
            (one, index) => (
                <Col key={index} xl={12} lg={12} md={12}>
                    <Card className="project-card flex-row flex-wrap">
                        <Col xl={4} lg={5} xs={9} className="project-img">
                            <Card.Img variant="top" src={one.img} style={{ marginTop: '1rem' }} />
                        </Col>
                        <Col xl={8} lg={7}>
                            <Card.Body>
                                <Card.Title className="project-card-title">{one.name}</Card.Title>
                                <Card.Text className="project-card-dsec">{one.description}</Card.Text>
                                <Button variant="look_btn" href={one.link}>자세히 보기</Button>
                                <Button variant="github_btn" href={one.github}>깃허브 확인하기</Button>
                                <h5 style={{color: proj_progress_color[one.progress]}}>
                                    {proj_progress_desc[one.progress]}
                                </h5>
                            </Card.Body>
                        </Col>
                    </Card>
                </Col>
            )
        )

        return (
            <>
                <Title title="MATH COM" subtitle="부산일과학고등학교 인공지능 동아리" className="Title-gradient" />
                <Container fluid>
                <Container fluid="sm" className="ct Intro-ct">
                    <Button variant="main_btn" href="/projects">{'PROJECTS >'}</Button>
                    <Container>
                        <Row className="no-gutters">
                            {projecs}
                        </Row>
                        
                    </Container>

                    <Button variant="main_btn" href="/members"> { 'MEMBERS >' } </Button>
                    <Container>
                        <Row className="no-gutters">
                            {membs}
                        </Row>
                    </Container>
                </Container>
                </Container>
            </>
        )
    }
}