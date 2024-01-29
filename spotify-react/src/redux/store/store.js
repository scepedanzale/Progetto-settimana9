import { applyMiddleware, combineReducers, createStore } from "redux"
import {thunk} from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import mainReducer from "../reducer/mainReducer"
import artistReducer from "../reducer/artistReducer"
import albumReducer from "../reducer/albumReducer"
import singleSongReducer from "../reducer/singleSongReducer"


const state = {
    main: {
        search: [],
        rockClassics: [],
        popCulture: [],
        hipHop: []
    },
    
    artist: [],
    album: [],
    
    songs: {
        songPlaying: [],
        favouriteSongs: []
    }
}

const bigReducer = combineReducers({
    main: mainReducer,
    
    artist: artistReducer,
    album: albumReducer,
    
    songs: singleSongReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, bigReducer)
export const store = createStore(persistedReducer, state, applyMiddleware(thunk))
export const persistor = persistStore(store);