import React from 'react';
import { Pagination } from 'react-bootstrap';

export default (props) => {
  const pages = Math.ceil(props.counting / 10);
  return (
    <Pagination>
      { 
        Array.from({ length: pages }).map((_, index) => 
          <Pagination.Item 
            active={props.current === index} 
            onClick={() => props.whenClicked(index + 1)} 
            key={index}>
            {index + 1} 
          </Pagination.Item>)
      }
    </Pagination>
  )
}