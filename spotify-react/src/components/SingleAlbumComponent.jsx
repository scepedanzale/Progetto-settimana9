import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbum } from '../redux/actions/actions'
import SingleSongComponent from './SingleSongComponent'
import { Link } from 'react-router-dom'

export default function SingleAlbumComponent({id}) {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAlbum(id))  // chiamata artista
    }, [id])

    const album = useSelector(state=> state.album[0])
    console.log(album)

  return (
    album &&
    <Container>
        <Row className='d-flex align-items-end'>
            <Col xs={12} lg={3} xxl={3} className='d-flex justify-content-center'>
                <Image className='album-img shadow-lg' src={album.cover_medium}/>
            </Col>
            <Col className='my-2 ms-4 ms-lg-0 font-info-album'>
                <h1 className='album-h1 fw-bold'>{album.title}</h1>
               <div className='d-lg-flex align-items-center'>
                        <Link to={`/artist/${album.artist.id}`}>
                            <div className='d-flex fw-bold my-2'>
                                <Image src={album.artist.picture_small} className='artist-img-circle rounded-circle me-1'/>
                                {album.artist.name}
                            </div>
                        </Link>
                       <div className='d-flex'>
                            <span className='d-lg-none'>{album.type} </span>  
                            <span className='mx-1'> &bull; {album.release_date.slice(0, 4)}  </span>
                            <span className='d-none d-lg-block'>
                            &bull; {album.nb_tracks} brani, {(album.duration/60).toFixed(0)} min
                            </span>
                       </div>
               </div>
                    

            </Col>
        </Row>
        <Row className='d-flex flex-column align-items-center py-3'>
            {album.tracks.data &&
            album.tracks.data.map((t, i) => (
                <SingleSongComponent song={t} index={i}/>
            ))}
        </Row>
    </Container>
  )
}