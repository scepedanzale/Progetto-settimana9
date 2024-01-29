import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteSong, playSong, removeFavouriteSong } from '../redux/actions/actions'

export default function SingleSongComponent({song, index}) {

    const dispatch = useDispatch()

    const favouriteSongs = useSelector(state => state.songs.favouriteSongs)
    const favourite = favouriteSongs.find(f => f.title === song.title)

  return (
    song &&
    <Row 
        key={index} 
        className='row-song justify-content-between align-items-center py-3'
        
    >
        <Col md={1} className='d-none d-md-block text-end' onClick={()=> dispatch(playSong(song))}>{index+1}</Col>
        <Col xs={10} md={8} className='justify-content-between' onClick={()=> dispatch(playSong(song))}>
            <Col xs={12} className='no-br fw-bold'><nobr>{song.title_short}</nobr></Col>
            <Col xs={12} className='font-info-song'>{song.artist.name}</Col>
        </Col>
        <Col xs={2} md={1} className='text-end'>
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
