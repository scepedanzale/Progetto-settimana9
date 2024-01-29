import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavouriteSong, removeFavouriteSong } from '../redux/actions/actions'

export default function PlayerComponent() {
    
    const dispatch = useDispatch()

    const song = useSelector(state=>state.songs.songPlaying[0])

    const favouriteSongs = useSelector(state => state.songs.favouriteSongs)
    const favourite = favouriteSongs.find(f => f.title === song.title)

  return (
    song &&
    <Row id="player" className="bg-black position-sticky bottom-0">
        <Container fluid id='container-player' className='d-flex justify-content-center'>
            <Row className='d-flex align-items-center justify-content-between w-100'>
                <Col xs={3} sm={2} md={1}>
                    <Link to={`/album/${song.album.id}`}><Image src={song.album.cover_small} className='rounded-1'/></Link>
                </Col>
                <Col className='no-br'>
                    <p><nobr>
                        <span className='player-song-title fw-bold no-br'>{song.title}</span> <br />
                        <Link to={`/artist/${song.artist.id}`}><span className='font-info-song'>{song.artist.name}   </span> </Link>
                    </nobr></p>
                </Col>
                <Col sm={1} className='d-none d-sm-block'>
                    {!favourite ?
                        (<i className="bi bi-heart" onClick={()=>dispatch(addFavouriteSong(song))}></i>)
                        :
                        (<i className="bi bi-heart-fill"  onClick={()=>dispatch(removeFavouriteSong(song))}></i>)
                    }
                </Col>
                <Col sm={4} md={7} className='d-none d-sm-block'>
                    <Col md={12} className='d-none d-md-flex align-items-center text-center'>
                        <Col><i className="bi bi-shuffle"></i></Col>
                        <Col><i className="bi bi-skip-backward-fill"></i></Col>
                        <Col><i className="bi bi-play-fill fs-1"></i></Col>
                        <Col><i className="bi bi-skip-forward-fill"></i></Col>
                        <Col><i className="bi bi-repeat"></i></Col>
                    </Col>
                    <Col sm={12} className='d-none d-sm-flex align-items-center justify-content-between font-info-song'>
                        {((song.duration/60)/2).toFixed(2)}
                        <div id='progress-bar-container' className='d-flex align-items-center'>
                        <div id='progress-bar'></div>
                        </div>
                        {(song.duration/60).toFixed(2)}
                    </Col>
                </Col>
                <Col xs={1} className='text-end d-md-none'>
                    <i className="bi bi-play-fill fs-1"></i>
                </Col>
            </Row>
        </Container>
    </Row>
  )
}