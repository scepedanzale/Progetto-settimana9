import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CardComponent({result}) {
  return (
    result && 
    <Col md={6} lg={4} xl={3} xxl={2} id='card-col' className='text-center mb-4'>
        <div id='card-div' className='rounded-3 p-3 w-100'>
          <Link to={`/album/${result.album.id}`}>
            <Image className='rounded-3 w-100' src={result.album.cover_medium}/>
          </Link>
          <div className='text-start py-3 d-flex flex-column flex-nowrap'>
            <Link to={`/album/${result.album.id}`}><p className='fw-bold'><nobr>{result.album.title}</nobr></p></Link>
            <Link to={`/artist/${result.artist.id}`}><p><nobr>Artist: {result.artist.name}</nobr></p></Link>
          </div>
        </div>
    </Col>
  )
}
