import React from 'react'
import { Row } from 'react-bootstrap'
import CardComponent from './CardComponent'
import { useDispatch, useSelector } from 'react-redux'
import { homePageFetch, toEmpty } from '../redux/actions/actions'

export const ROCK_CLASSICS = 'ROCK_CLASSICS'
export const POP_CULTURE = 'POP_CULTURE'
export const HIP_HOP = 'HIP_HOP'

export default function HomePageComponent() {

  const dispatch = useDispatch()
  
    const rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi',
      ]

      const popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
        'bts',
        'edsheeran'
      ]

      const hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'agustd',
        'bigmama',
        'nitro'
      ]

      window.onload = async () => {
        dispatch(toEmpty())
        let rockRandomArtists = []
        let popRandomArtists = []
        let hipHopRandomArtists = []

        while (rockRandomArtists.length < 4) {
          let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)] 
          if (!rockRandomArtists.includes(artist)) {
            rockRandomArtists.push(artist) 
            dispatch(homePageFetch(artist, ROCK_CLASSICS))
          }
        }
        while (popRandomArtists.length < 4) {
          let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
          if (!popRandomArtists.includes(artist)) {
            popRandomArtists.push(artist)
            dispatch(homePageFetch(artist, POP_CULTURE))
          }
        }
        while (hipHopRandomArtists.length < 4) {
          let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
          if (!hipHopRandomArtists.includes(artist)) {
            hipHopRandomArtists.push(artist)
            dispatch(homePageFetch(artist, HIP_HOP))
          }
        }
      }
      
      const resultRockClassics = useSelector(state => state.main.rockClassics)
      const resultPopCulture = useSelector(state => state.main.popCulture)
      const resultHipHop = useSelector(state => state.main.hipHop)

      
  return (
    <main className='p-3'>
            <Row>
                <h2>Rock Classics</h2>
                {resultRockClassics &&
                  resultRockClassics.map((r, i)=>(
                    <CardComponent key={i} result={r.data[Math.floor(Math.random() * 25)]}/>
                  ))
                }
            </Row>
            <Row className='my-4'>
                <h2>Pop Culture</h2>
                {resultPopCulture &&
                  resultPopCulture.map((r, i)=>(
                    <CardComponent key={i} result={r.data[Math.floor(Math.random() * 25)]}/>
                  ))
                }
            </Row>
            <Row>
                <h2>#HipHop</h2>
                {resultHipHop &&
                  resultHipHop.map((r, i)=>(
                    <CardComponent key={i} result={r.data[Math.floor(Math.random() * 25)]}/>
                  ))
                }
            </Row>
        </main>
  )
}
