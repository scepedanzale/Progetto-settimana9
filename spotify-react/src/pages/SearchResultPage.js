import React, { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../redux/actions/actions'
import CardComponent from '../components/CardComponent'

export default function SearchResultPage() {

    const dispatch = useDispatch()

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(search(query))
    }

    const result = useSelector(state => state.main.search)
    console.log(result)

  return (
    <>
        <Container className='py-4'>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Row>
                    <Col xs={8} md={10}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                                type="text" 
                                placeholder="Cosa vuoi ascoltare?"
                                value={query}
                                onChange={(e)=>handleChange(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button
                            variant='outline-secondary'
                            type="button"
                            className='w-100'
                            onClick={(e)=>handleSubmit(e)}
                        >
                        <i className="bi bi-search"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row className='mt-4'>
            {result && result.length > 0 &&
                result[0].data.map((r, i)=>(
                    <CardComponent key={i} result={r}/>
                ))} 
                
            </Row>
        </Container>
    </>
  )
}
