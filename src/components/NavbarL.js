import React from 'react'
import {  Navbar } from 'react-bootstrap';
import { useDataLayerValue } from '../DataLayer';


export default function NavbarL() {


  const [{user},dispatch] = useDataLayerValue();


  return (
    <>
      <Navbar bg="light" expand="lg" className="nav">
      <Navbar.Brand href="#home">Spotify Knowledge</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
       
      <Navbar.Text>
        Signed in as : {user?.display_name}
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </>
    
  )
}
