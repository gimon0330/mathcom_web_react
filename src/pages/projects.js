import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import projects from '../datas/projects';

export default class Home extends Component {
    render() {
        const proj_progress_color = ['red', 'green', 'blue']
        const proj_progress_desc = ["개발 중단된 프로젝트입니다.", "개발 중인 프로젝트입니다.","개발 완료된 프로젝트입니다."]
        
        const projecs = projects.map(
            (one, index) => (
                <Col key={index} xxl = {3} xl={4} md={6}>
                    <Card className="project-card">
                    <Card.Img variant="top" src={one.img} style={{ marginTop: '1rem' }} />
                    <Col>
                        <Card.Body>
                            <Card.Title className="project-card-title">{one.name}</Card.Title>
                            <Card.Text className="project-card-dsec">{one.description}</Card.Text>
                            <Button variant="look_btn" href={one.link}>자세히 보기</Button>
                            <Button variant="github_btn" href={one.github}>깃허브 확인하기</Button>
                            <p style={{color: proj_progress_color[one.progress], fontSize: '10pt'}}>
                                {proj_progress_desc[one.progress]}
                            </p>
                        </Card.Body>
                    </Col>
                    </Card>
                </Col>
            )
        )

        return (
            <>
                <Title title="MATH COM" subtitle="부산일과학고등학교 인공지능 동아리" className="Title-gradient" />
                <Container fluid="true" style={{ margin: 60 }}>
                    <h1>All Projects</h1>
                    <Row fluid="true">
                        {projecs}
                    </Row>
                </Container>
            </>
        );
    }
}
