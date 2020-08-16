import React from 'react';
import {
  Container,Row,Col,Media
} from 'reactstrap';
import './Project.css';
import { MdFavorite, MdTrendingUp, MdPeopleOutline } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

const CardElement = (props) =>{
const {image_url, name, description} = props.product 

return(
  <>
  <Media>
      <Media left >
        <Media object img src={image_url} width="30" height="30" className="img-responsive" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {name}
        </Media>
       {description}
      </Media>
  </Media>
  </>
  );

}
export default CardElement;