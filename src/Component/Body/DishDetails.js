import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComment from './LoadComment';
const DishDetails =(props)=>{
    return (
        <div>
            <Card className="mt-2">
                <CardBody>
                    <CardImg alt={props.dish.name} src={props.dish.image} />
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Category: {props.dish.category}</p>
                        <p>Price: {props.dish.price}$</p>
                        <LoadComment cmt={props.dish.comments} />
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetails;