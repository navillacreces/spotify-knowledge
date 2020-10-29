import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import NavBarL from './NavbarL';
import {Table,Container,Col,Row} from 'react-bootstrap';


function TopTracks() {


    const [{topTracks},dispatch] = useDataLayerValue();

    return (
        <>
        <NavBarL />
        <Container >
            <Row>
                <Col>
                <img src={topTracks[0].album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={topTracks[1].album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col >
                <Col >
                <img src={topTracks[2].album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
                <Col >
                <img src={topTracks[3].album.images[1].url} alt="albumArt" height={150} width={150} />
                </Col>
            </Row>
           
        </Container>
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Song</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    {topTracks.map((song,id) =>{
                        return(
                            <tr key={id}>
                                <td>{song.artists[0].name}</td>
                                <td>{song.name}</td>
                                <td>{song.album.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
            
        </>
    )
}

export default TopTracks
