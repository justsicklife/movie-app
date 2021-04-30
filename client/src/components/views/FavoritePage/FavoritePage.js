import React,{useEffect,useState} from 'react'
import FavoriteInfo from './Section/FavoriteInfo';
import {GetFavoritesFunction,FavoriteDeleteFunction} from '../../FavorriteUtils'

function FavoritePage() {

    const [Favorites, setFavorites] = useState([]);
    
    const GetFavorites = (userId) => {
        GetFavoritesFunction(userId,(data => {
            console.log(data);
            setFavorites(data.favorites);
        }))
    }
    
    const onClickFavoriteDelete = (movieId,userId) => {   
        FavoriteDeleteFunction(movieId,userId,() => GetFavorites(userId));    
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        GetFavorites(userId);

    }, [])

    return (
        <div className="favorite_container">
            {Favorites ? Favorites.map(Favorite => {
                return (
                    <FavoriteInfo onClickFavoriteDelete={onClickFavoriteDelete} {...Favorite}/>
                )
            }) : <div>아</div>}    
        </div>
    )
}

export default FavoritePage
