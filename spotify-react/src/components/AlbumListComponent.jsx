import React, { useEffect, useState } from 'react'
import { artistUrl } from '../config/config'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import CardComponent from './CardComponent'

export default function AlbumListComponent({artist}) {

    const [songs, setSongs] = useState([])

    let arrayAlbum=[]

    useEffect(()=>{

        axios.get(artistUrl + artist.id + '/top?limit=50')
        .then(response => {
            if(response.status === 200){
                setSongs(response.data.data)
            }
        })
    }, [artist])

   
    

  return (
    <Row className='bg-dark' >
        <h2 className='m-0 pb-3 pt-5 fw-bold'>Discografia</h2>
        { songs && songs.length>0 &&
            songs.map(s => (
                !arrayAlbum.includes(s.album.id) && arrayAlbum.push(s.album.id) &&
                <CardComponent key={s.album.id} result={s}/>
            ))
        }
    </Row>
  )
}