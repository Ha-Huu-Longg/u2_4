import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';

function App() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className={`menu-toggle ${toggle ? "open" : ""}`}>
                <Row className='menu-list'>
                    <Col sm={12} className='menu-item item-exit' onClick={() => setToggle(!toggle)}>Exit</Col>
                    <Col sm={12} className='menu-item'>
                        <a href='#food'>Foot</a>
                    </Col>
                    <Col sm={12} className='menu-item'>
                        <a href='#about'>About</a>
                    </Col>
                </Row>
            </div>

            <div className='header-scope'>
                <div className='header'>
                    <i className="fa-solid fa-bars item-menu" onClick={() => setToggle(!toggle)}></i>
                    <span>My Food</span>
                    <span>Mail</span>
                </div>
            </div>

            <Container>
                <Row id="food" className='cart-food-scope'>
                    {new Array(8).fill(null).map((item, index) => (
                        <Col key={index} sm={3}>
                            <Card className='cart-food'>
                                <Card.Img variant="top" src="https://picsum.photos/200/300" className='image-food' />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <hr />

                <Row id="about">
                    <h4 className='t-center'>About Me, The Food Man</h4>
                    <Row>
                        <Card className='cart'>
                            <Card.Img variant="top" src="https://picsum.photos/600/" className='cart-about' />
                            <Card.Body>
                                <Card.Title>I am Who I Am!</Card.Title>
                                <Card.Text>
                                    Just me, myself and I, exploring the universe of unknownment.
                                    I have a heart of love and an interest of lorem ipsum and mauris neque quam blog.
                                    I want to share my world with you. Praesent tincidunt sed tellus ut rutrum.
                                    Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Row>

                <Row>
                    <p className='t-center'>Copyright 1999-2023 by Refsnes Data. All Rights Reserved.</p>
                </Row>

            </Container>
        </>
    );
}

export default App;
