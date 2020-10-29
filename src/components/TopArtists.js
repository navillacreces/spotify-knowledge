import React from 'react'

import { useDataLayerValue } from '../DataLayer';
import {Media,Container, Row, Col} from 'react-bootstrap';
import NavBarL from './NavbarL';


function TopArtists() {

    const [{topArtists},dispatch] = useDataLayerValue();
    console.log(topArtists);

    return (
        <>
           <NavBarL/>

           
           <Container >
            <Row>
                <Col>
                <img src={topArtists[0].images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={topArtists[1].images[1].url} alt="albumArt" height={150} width={150} />
                </Col >
                <Col >
                <img src={topArtists[2].images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={topArtists[3].images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
            </Row>
           
            </Container> 
           
           <Container className="p-3">
           <ul>
               {topArtists.map((artist,id) =>{
                   return (
                       <Media as="li" key={id}>
                           <img
                               width={120}
                               height={120} 
                                src={artist.images[1].url}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>{artist.name}</h5>
                                <h6>{artist.followers.total} followers</h6>
                                <p style={{color:'black'}}>{artist.genres[0]}</p>
                                <p style={{color:'black'}}>{artist.popularity} score</p>
                            </Media.Body>
                       </Media>
                       
                   )
               })}
           </ul>
           </Container>
           
        </>
    )
}

export default TopArtists
