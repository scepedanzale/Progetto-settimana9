import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleSongComponent from './SingleSongComponent'

export default function FavouritesComponent() {

    const favourites = useSelector(state => state.songs.favouriteSongs)

  return (
    <Container>
        <h1>Brani che ti piacciono</h1>
        <Row className='d-flex flex-column align-items-center py-3'>
            {favourites &&
            favourites.map((f, i) => (
                <SingleSongComponent song={f} index={i}/>
            ))}
        </Row>
    </Container>
  )
}
