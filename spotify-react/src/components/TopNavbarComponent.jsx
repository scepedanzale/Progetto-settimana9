import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function TopNavbarComponent() {
  const navigate = useNavigate()
  return (
    <Col xs={12} id="top-nav" className=' overflow-hidden p-3 z-3'>
          <Row>
            <Col xs={6}>
              <Button variant='' onClick={()=>navigate(-1)}><i className="bi bi-arrow-left-circle fs-4"></i></Button>
              <Button variant='' onClick={()=>navigate(1)}><i className="bi bi-arrow-right-circle fs-4"></i></Button>
            </Col>
            <Col xs={6} className='d-flex justify-content-end'>
              <Button variant=''><i className="bi bi-bell fs-4"></i></Button>
              <Button variant=''><i className="bi bi-people fs-4"></i></Button>
              <Button variant=''><i className="bi bi-person-circle fs-4"></i></Button>
            </Col>
          </Row>
    </Col>
  )
}
