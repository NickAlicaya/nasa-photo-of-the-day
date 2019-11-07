import React from "react";
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col
  } from 'reactstrap';
import styled from "styled-components"

const nasaTitle = styled.h1`
font-size: 2.5rem;
font-weight:650;
color: slateblue;
`

const NasaCard = (props) =>{
    return(
    <div>
    <Container>
    <Col>
    <Card>
        <CardImg top width="85%" src={props.imgUrl} alt="Picture of heavenly bodies for nov 7,2019" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Date: {props.date}</CardSubtitle>
          <CardSubtitle>Copyright {props.copyright}</CardSubtitle>
          <CardText>Description: {props.photoCaption}</CardText>
          <Button>Subscribe</Button>
        </CardBody>
      </Card>


{/* 
        <h2>Astronomy picture of the day</h2>
        <h1>{props.title}</h1>
        <p>Date: {props.date}</p>
        <img src= {props.imgUrl}/>
        <h3>Copyright {props.copyright}</h3>
        <p>Description: {props.photoCaption}</p> */}
    </Col>
    </Container>
    </div>
    )}
export default NasaCard

