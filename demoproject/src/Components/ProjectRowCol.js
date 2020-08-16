import React from 'react';
import elementList from '../elementList'
import ElementList from './ElementList'
import {Container,Row,Col} from 'reactstrap';
    const ProjectRowCol =()=>
    {
      return(
      <>
      <Container>
      <Row>
      <Col><ElementList/></Col>
      <Col><ElementList/></Col>
      </Row>
      </Container>
      </>
      );
    }

export default ProjectRowCol;