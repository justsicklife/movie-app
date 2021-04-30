import {FAVORITE_SERVER} from './Config.js'
import axios from 'axios'

const endpointFavoriteNumber = `${FAVORITE_SERVER}/number`;

const endpointFavorited = `${FAVORITE_SERVER}/favorited`;

const endpointFavoriteAdd= `${FAVORITE_SERVER}/add`;

const endpointFavoriteDelete= `${FAVORITE_SERVER}/delete`;

const endpointGetFavorites = `${FAVORITE_SERVER}/show`;

export const FavoriteDeleteFunction = (movieId,userId,cb) => {
    axios.post(endpointFavoriteDelete,{movieId,userId})
        .then(response => {
            if(response.data.success) cb();
            else alert("삭제하는데 실패했습니다.");
        })
}

export const FavoriteAddFunction = (body,cb) => {

    axios.post(endpointFavoriteAdd,body)
        .then((response) => {
            if(response.data.success) cb();
            else alert("추가하는데 실패했습니다.");
        })
}

export const FavoritedCheckFunction = (movieId,userId) => {
    const result = axios.post(endpointFavorited,{movieId,userId})
    .then(response => {
        if(response.data.success)
        return response.data.favorited;
    })

    return result;
}

export const FavoriteNumberFuntion = (movieId) => {
        
    const result = axios.post(endpointFavoriteNumber,{movieId})
    .then(response => {
        if(response.data.success)
        return response.data.number;
    })

    return result;
    
}

export const GetFavoritesFunction = (userId,cb) => {
    axios.post(endpointGetFavorites,{userId})
    .then(response => {
        cb(response.data);
    })
}