import React from 'react';
import {
Form
} from 'reactstrap';
import './Project.css';

const FrontTitle = ()=>
{
return(
  <>
  <Form className='form-color'>
    <h1 align='center'>DISCOVER PROJECTS</h1>
    <h6 align='center'> 910919 public projects to discover</h6>
    <div className="md-form mt-0">
      <input className='TL' type="text" placeholder='search' /> 
    </div> 
  </Form> 
  </>
  );

}
export default FrontTitle;