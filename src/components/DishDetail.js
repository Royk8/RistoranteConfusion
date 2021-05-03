import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

/**
 * Made by Roy Maestre
 * For the Front-End Web Developer with React Course
 * Assignment 1.
 */

class DishDetail extends Component{

    renderDish(dish){
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

    renderComments(dish){
        if(dish.comments != null){
            const comments = dish.comments.map((comment) => {
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
                        {comments}
                    </ul>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        //console.log(this.props.dish)
        if(this.props.dish != null){
            return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;