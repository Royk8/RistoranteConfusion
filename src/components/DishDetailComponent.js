import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

/**
 * Made by Roy Maestre
 * For the Front-End Web Developer with React Course
 * Assignment 1.
 */


    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    }

    function RenderComments({comments}){
        if(comments != null){            
            const commentss = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            -- {comment.author},  &nbsp;
                            {new Intl.DateTimeFormat('en-US',{
                                year : 'numeric',
                                month : 'short',
                                day : '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                );
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentss}
                    </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        //console.log(this.props.dish)
        if(props.dish != null){
            return(
                <div className = 'container'>
                    <div className="row">
                            <RenderDish dish = {props.dish} />                  
                            <RenderComments comments = {props.dish.comments}/>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

export default DishDetail;