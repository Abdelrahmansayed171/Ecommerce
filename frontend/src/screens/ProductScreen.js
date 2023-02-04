import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'

import Rating from '../components/Rating.js'

import products from '../products.js'

function ProductScreen() {
    let { id } = useParams();
    const product = products.find((p) => p._id === id)

    return (
        <div>
            <Link to='/' className='btn btn-secondary my-3'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid rounded/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        
                        <ListGroup.Item>
                            <h3>
                                {product.name}
                            </h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h5>Price: <strong>${product.price}</strong> </h5>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h6>Description: {product.description} </h6>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong> 
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0
                                            ? 'In Stock'
                                            : 'Out Of Stock'
                                        }
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            
                            <ListGroupItem className='text-center'>
                                <Button className='btn-block' type='button' disabled={product.countInStock > 0? false : true}>Add to cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen