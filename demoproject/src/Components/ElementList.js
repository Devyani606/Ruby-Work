import React from 'react';
import CardElement from './CardElement';
import elementList from '../elementList'

const ElemenetList = () =>{

  return(
    <>
    <h2 className="text-left" >
      
    
    </h2>
    {elementList.map((product) => <CardElement product={product} key='product.id'/>)}
    
    </>
  );

}
export default ElemenetList;