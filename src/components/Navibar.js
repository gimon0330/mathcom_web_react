import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './logo.png'

export default class Navibar extends Component {
    render() {
        return (
            <>
                <div style={{ paddingTop: 65.94 }}>
                    <Navbar bg="light" variant="light" expand="sm" fixed="top" className="nav-item shadow no-drag">
                        <Navbar.Brand href="/" style={{ fontSize: 22, fontWeight: 700, fontFamily: "NanumSquare" }}>
                            <img src={logo} alt="" style={{ width: 35, marginRight: 10}} />
                            MATH COM
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">홈</Nav.Link>
                                <Nav.Link href="/info">동아리 소개</Nav.Link>
                                <Nav.Link href="/members">동아리 멤버</Nav.Link>
                                <NavDropdown title="프로젝트" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/projects">
                                        전체 프로젝트
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/projects/ticktaktoe">
                                        Perfect Ticktaktoe
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/projects/python">
                                        Python
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </>
        );
    }
};
