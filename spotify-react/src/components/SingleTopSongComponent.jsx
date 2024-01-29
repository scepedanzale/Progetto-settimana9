import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavouriteSong, playSong, removeFavouriteSong } from '../redux/actions/actions'

export default function SingleSongComponent({song, index}) {

    const dispatch = useDispatch()

    const favouriteSongs = useSelector(state => state.songs.favouriteSongs)
    const favourite = favouriteSongs.find(f => f.title === song.title)

  return (
    <Row 
        key={index} 
        className='row-song w-100 justify-content-between align-items-center my-2 py-1'
        onClick={()=> dispatch(playSong(song))}
    >
        <Col xs={1} className='text-center'>{index+1}</Col>
        <Col xs={3} sm={2} md={2} lg={1}>
            <Link to={`/album/${song.album.id}`}><Image src={song.album.cover_small}/></Link>
        </Col>
        <Col xs={6} className='d-lg-flex justify-content-between'>
            <Col xs={12} className='no-br fw-bold'><nobr>{song.title_short}</nobr></Col>
            
        </Col>
        <Col xs={1} className='text-end'>
            {!favourite ?
                (<i className="bi bi-heart" onClick={()=>dispatch(addFavouriteSong(song))}></i>)
                :
                (<i className="bi bi-heart-fill"  onClick={()=>dispatch(removeFavouriteSong(song))}></i>)
            }
        </Col>
        <Col md={2} className='d-none d-md-block'>{(song.duration/60).toFixed(2)}</Col>
    </Row>
  )
}
