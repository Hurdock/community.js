import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import Axios from '../utils/axios';
import Header from './Layouts/Header';

export default () => {

  const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await Axios.get('/news/getNews');
        setNews(response.data);
      }
      fetchData();
    }, []);

  return (
    <React.Fragment>
      <Header title="Homepage"></Header>
      <Container>
        <Row>
          <Col>
            {
              news.map((article, index) => (
                <Card key={index} className="mb-2">
                  <Card.Body>
                    <Card.Title className="text-primary">{article.title} written by {article.author.username}</Card.Title>
                    <Card.Text>
                      {article.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            }

            { news.length < 1 ? (<h4>Nothing new to show up.</h4>) : null}

            <Pagination className="mt-2">
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </React.Fragment>      
  )
}