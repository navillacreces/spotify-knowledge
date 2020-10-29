import React from 'react'
import { useDataLayerValue } from '../DataLayer';
import {Table,Media,Container, Col, Row} from 'react-bootstrap';
import NavBarL from './NavbarL';


function RecentlyPlayed() {

    const [{recentlyPlayed}, dispatch] = useDataLayerValue();

    

    return (
        <>
        <NavBarL />
          <Container >
            <Row>
                <Col>
                <img src={recentlyPlayed[0].track.album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={recentlyPlayed[1].track.album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col >
                <Col >
                <img src={recentlyPlayed[2].track.album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={recentlyPlayed[3].track.album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
            </Row>
           
            </Container> 
       
        <Container>
            <Table>
                <thead>
                    <tr> 
                        <th>Artist(s)</th>
                        <th>Song</th>
                        <th>Album</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {recentlyPlayed.map((song,id) =>{
                        return (
                            <tr key={id}>
                                <td>{song.track.artists[0].name}</td>
                                <td>{song.track.name}</td>
                                <td>{song.track.album.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
            
        </>
    )
}

export default RecentlyPlayed
