import React from 'react'
import NavbarL from './NavbarL'
import {Container, Row,Col ,Image, CardGroup,Card, Button, Jumbotron} from 'react-bootstrap';

import { useDataLayerValue } from '../DataLayer';

import { LinkContainer } from 'react-router-bootstrap'


export default function Home({spotify}) {

    const [{user},dispatch] = useDataLayerValue();


    return (
        <>
            <NavbarL/>
            <Container className="p-3">
            <Jumbotron fluid>
                <Container>
                    <Row>
                    <Image src={user?.images[0]?.url} alt="userpic"/>
                    <Col>
                    <h1>Welcome,{user?.display_name}</h1>
                    <p style={{color:'black'}}>Check out what you've been listening to lately</p>
                    </Col>
                    </Row>
                </Container>
            </Jumbotron>
            </Container>
        
            <Container>
            <CardGroup>
               <Card bg='light' border="dark">
               
                    <Card.Body>
                        <Card.Title>Current Top Artists</Card.Title>
                        <Card.Text style={{color:'black'}}>
                        Top artists based on calculated affinity
                        </Card.Text>
                        <LinkContainer to='/artists'>
                        <Button variant="dark">
                            Artists
                        </Button>
                        </LinkContainer>
                        </Card.Body>
                       
               </Card>
               <Card bg='light' border="dark" >
               <Card.Body>
               <Card.Title>Current Top Songs</Card.Title>
                        <Card.Text style={{color:'black'}}>
                            Songs currently in your head
                        </Card.Text>
                        <LinkContainer to='/songs'>
                        <Button variant="dark">
                            Songs
                        </Button>
                        </LinkContainer>
                        </Card.Body>
                        
               </Card>
               <Card bg='light' border="dark">
               <Card.Body>
               <Card.Title>Most Recently Played Tracks</Card.Title>
                        <Card.Text style={{color:'black'}}>
                            Tracks you recently enjoyed
                        </Card.Text>
                        <LinkContainer to='/recent'>
                        <Button variant="dark">
                             Recent
                        </Button>
                        </LinkContainer>
                        </Card.Body>
               </Card>
           </CardGroup>
            </Container>
           
           
          
        </>
    )
}
