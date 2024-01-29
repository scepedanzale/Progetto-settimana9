import axios from 'axios'
import { searchUrl, artistUrl, albumUrl } from "../../config/config"

export const SEARCH = 'SEARCH'
export const GET_ARTIST = 'GET_ARTIST'
export const GET_ALBUM = 'GET_ALBUM'
export const PLAY_SONG = 'PLAY_SONG'
export const TO_EMPTY = 'TO_EMPTY'
export const ADD_FAVOURITE_SONG = 'ADD_FAVOURITE_SONG'
export const REMOVE_FAVOURITE_SONG = 'REMOVE_FAVOURITE_SONG'

export const search = (query) => {
    return function(dispatch){
        axios.get(searchUrl + query)
            .then(response => {
                if(response.status === 200){
                    return dispatch({type: SEARCH, payload: response.data})
                }
            })
            .catch(err => console.error(err))
    }
}


export const homePageFetch = (query, type) => {
    return function(dispatch){
        axios.get(searchUrl + query)
            .then(response => {
                if(response.status === 200){
                    return dispatch({type: type, payload: response.data})
                }
            })
            .catch(err => console.error(err))
    }
}

export const getArtist = (id) => {
    return function(dispatch){
        axios.get(artistUrl + id)
            .then(response => {
                if(response.status === 200){
                    return dispatch({type: GET_ARTIST, payload: response.data})
                }
            })
            .catch(err => console.error(err))
    }
}
export const getAlbum = (id) => {
    return function(dispatch){
        axios.get(albumUrl + id)
            .then(response => {
                if(response.status === 200){
                    return dispatch({type: GET_ALBUM, payload: response.data})
                }
            })
            .catch(err => console.error(err))
    }
}

export const playSong = (song) => {
    return ({type: PLAY_SONG, payload: song})
}

export const toEmpty = () => {
    return ({type: TO_EMPTY})
}

export const addFavouriteSong = (song) => {
    return ({type: ADD_FAVOURITE_SONG,  payload: song})
}
export const removeFavouriteSong = (song) => {
    return ({type: REMOVE_FAVOURITE_SONG,  payload: song})
}