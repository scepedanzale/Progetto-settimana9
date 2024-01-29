import React from 'react'
import SingleAlbumComponent from '../components/SingleAlbumComponent'
import { useParams } from 'react-router-dom'

export default function AlbumPage() {

  const { id } = useParams()
  console.log(id)

  return (
    <SingleAlbumComponent id={id}/>
  )
}
