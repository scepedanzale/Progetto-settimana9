import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtist } from '../redux/actions/actions'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { artistUrl } from '../config/config'
import axios from 'axios'
import AlbumListComponent from './AlbumListComponent'
import SingleTopSongComponent from './SingleTopSongComponent'

export default function ArtistComponent({id}) {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getArtist(id))  // chiamata artista
        // chiamata alle top songs
        axios.get(artistUrl + id + '/top?limit=5')
        .then(response => {
            if(response.status === 200){
                setTopSongs(response.data.data)
            }
        })
    }, [id, dispatch])

    const artist = useSelector(state => state.artist)
    
    const [topSongs, setTopSongs] = useState([])

    
    

  return (
    artist[0] &&
    <Container id='artist-container' fluid>
        <Row id='artist-row'>
            <Col xs={12} id='artist-img-col'>
                <Image src={artist[0].picture_big}/>
            </Col>

            <Col xs={12} id='artist-col' className='scroll-bar mx-2'>
                <Col xs={12} id='artist-name-col' className='pt-5 px-3'>
                    <h1 className='artist-h1 fw-bold'>{artist[0].name}</h1>
                    <p className='mb-3'>{artist[0].nb_fan} ascoltatori mensili</p>
                </Col>
                <Col xs={12} id='artist-songs-col' className='bg-dark px-3' >
                    <h2 className='m-0 py-3 fw-bold'>Popolari</h2>
                    {topSongs &&
                    topSongs.map((s, i) => (
                        <SingleTopSongComponent song={s} index={i}/>
                    ))}
                    <AlbumListComponent artist={artist[0]}/>
                </Col>
            </Col>
        </Row>
    </Container>
  )
}

