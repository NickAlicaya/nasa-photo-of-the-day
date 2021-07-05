import React from "react";
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col
  } from 'reactstrap';
import styled from "styled-components"

// const whatever = styled(Component)`
//   (styling rules here)
// `;

const NasaTitle = styled(CardTitle)`
font-size: 3rem;
font-weight:650;
color: slateblue
`;

const NasaDate = styled(CardSubtitle)`
font-size: 1.7rem;
font-weight:650;
margin:1rem 0;
`;
const NasaImg = styled(CardImg)`
height:60vh;
`;

const NasaCard = (props) =>{
    return(
    <div>
    <Container>
    <Col>
    <Card>
        <NasaImg top width="85%" src={props.imgUrl} alt="Picture of heavenly bodies for nov 7,2019" />
        <CardBody>
          <NasaTitle>{props.title}</NasaTitle>
          <NasaDate>Date: {props.date}</NasaDate>
          <NasaDate>Copyright {props.copyright}</NasaDate>
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

