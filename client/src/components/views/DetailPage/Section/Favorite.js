import React,{useEffect,useState} from 'react'
import { API_KEY, API_URL,IMAGE_BASE_URL,USER_SERVER,FAVORITE_SERVER } from '../../../Config';
import axios from 'axios';
import {
    FavoriteAddFunction,
    FavoriteDeleteFunction,
    FavoritedCheckFunction,
    FavoriteNumberFuntion
} from '../../../FavorriteUtils.js'

function Favorite(props) {

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(null);

    const body = {
        title: props.title,
        image: props.image,
        movieId: props.movieId,
        userId: props.userId,
        runtime: props.runtime,
    };

    const onFavoriteToggle = () => {

        axios.get(`${USER_SERVER}/auth`)
        .then(response => {
            if(response.data.isAuth){
                if(Favorited) {
                    FavoriteDeleteFunction(props.movieId,props.userId,() => {
                        setFavorited(!Favorited)
                        setFavoriteNumber(FavoriteNumber-1);
                    });
                }else {
                    FavoriteAddFunction(body,() => {
                        setFavorited(!Favorited);
                        setFavoriteNumber(FavoriteNumber+1);
                    });
                }
            } else {
                props.history.push('/login')
            }
        })


    }

    useEffect(() => {
        
        FavoritedCheckFunction(props.movieId,props.userId).then(result => {
            setFavorited(result);
        })

        FavoriteNumberFuntion(props.movieId).then(result => {
            setFavoriteNumber(result);  
        })

    }, [])

    return (
        <>
            <button onClick={onFavoriteToggle}>
                {!Favorited ? "찜 하기" : "찜 취소"} 
                ({FavoriteNumber})
                </button>
        </>
    )
}

export default Favorite
