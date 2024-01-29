import React, { useEffect, useState } from 'react'
import { artistUrl } from '../config/config'
import { Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CardComponent from './CardComponent'

export default function AlbumListComponent({artist}) {

    const [songs, setSongs] = useState([])

    let arrayAlbum=[]

    useEffect(()=>{
        arrayAlbum=[]
        songsFunc()
    }, [artist])

    const songsFunc = () => {
        axios.get(artistUrl + artist.id + '/top?limit=50')
        .then(response => {
            if(response.status === 200){
                setSongs(response.data.data)
            }
        })
    }

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