import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props =>{
    console.log(props)
    return (
        <div>
             <Card className="mt-2">
                 <CardBody>
                     <CardImg alt={props.itemss.name} src={props.itemss.image} style={{opacity:".5"}}/>
                     <CardImgOverlay>
                        <CardTitle style={{cursor:'pointer'}} onClick={props.ondishdetial} >{props.itemss.name}</CardTitle>
                     </CardImgOverlay>
                 </CardBody>
             </Card>
        </div>
    )
}
export default MenuItem; 