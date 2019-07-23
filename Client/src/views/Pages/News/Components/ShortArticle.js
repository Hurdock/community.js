import React from 'react';
import { Card } from 'react-bootstrap';

export default (props) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="text-primary">{props.article.title} written by {props.article.author.username}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html: props.article.content}}></Card.Text>
      </Card.Body>
    </Card>
  )
}