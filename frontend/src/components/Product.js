import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded" style={{ width: '16rem' , height: '30rem'}}>
            <a href='#'>
                <div >
                    <Card.Img src={product.image}/>
                </div>
                
            </a>
            <Card.Body>
                <a href='#'>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
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