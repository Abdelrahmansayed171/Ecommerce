import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating.js'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded" style={{ width: '16rem' , height: '30rem'}}>
            <a href='#'>
                <div >
                    <Card.Img src={product.image}/>
                </div>
                
            </a>
            <Card.Body>
                <a href='#' className='proName'>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product