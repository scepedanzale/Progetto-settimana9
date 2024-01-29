import React from 'react'
import { useParams } from 'react-router-dom'
import ArtistComponent from '../components/ArtistComponent'

export default function ArtistPage() {

  const { id } = useParams()
  
  return (
    <ArtistComponent id={id}/>
  )
}
