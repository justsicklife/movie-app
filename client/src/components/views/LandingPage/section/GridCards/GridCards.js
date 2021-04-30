import React,{useEffect} from 'react'
import { IMAGE_BASE_URL } from '../../../../Config';
import "./GridCards.css";

function GridCards(props) {

    return (
        <div className="gird_cards">
            {props.movies.map(movie => {
                return (
                    <div className="gird_card">
                        <a href={`/movie/detail/${movie.id}`}>
                            <img src={movie.poster_path ? 
                            `${IMAGE_BASE_URL}w500${movie.poster_path}` :null}/>
                        </a>
                        <div className="gird_card_detail">
                            <h3 className="gird_card_detail_title">{movie.original_title}</h3>
                            <img/>
                            <div className="gird_card_detail_date">{movie.release_date}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GridCards
