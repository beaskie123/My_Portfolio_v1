import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Social(props) {
  return (
    <ListGroup.Item className='bg-none'>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img
                    alt={props.alt}
                    src={props.src}
                    className="img-icon"
                />
                </a>
    </ListGroup.Item>
  )
}
