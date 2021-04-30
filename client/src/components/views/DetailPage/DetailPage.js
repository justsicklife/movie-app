import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { API_KEY, API_URL,IMAGE_BASE_URL,USER_SERVER,FAVORITE_SERVER } from '../../Config';
import "./DetailPage.css";
import styled from 'styled-components';
import Favorite from './Section/Favorite';

const MovieDetailImage = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.25;
        background-size: cover;
        background-position: center;
        background-image: url(${props => props.image})
    }
`;

function DetailPage(props) {

    const movieId = props.match.params.id;
    const userId = localStorage.getItem("userId");
    
    const [MovieDetail, setMovieDetail] = useState(null);
    const [Casts, setCasts] = useState([])
    const [Directer, setDirecter] = useState(null);

    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    useEffect(() => {
        axios.get(endpointInfo)
        .then(response => {
            console.log(response.data);
            setMovieDetail(response.data)
        });

        axios.get(endpointCrew)
        .then(response => {
            setDirecter(response.data.crew[0]);
            setCasts(response.data.cast)
        });
        
    }, [])

    return (
        <div>
            {MovieDetail && Directer &&
                <MovieDetailImage image={`${IMAGE_BASE_URL}w1280${MovieDetail.backdrop_path}`}>
                    <div className="detail">
                        <div className="detail_poster">
                            <div>
                                <img src={`${IMAGE_BASE_URL}w500${MovieDetail.poster_path}`}/>
                            </div>
                        </div>
                        <div>
                            <div className="title">
                                <h1>{MovieDetail.title}</h1>
                                <Favorite 
                                image={`${IMAGE_BASE_URL}w500${MovieDetail.poster_path}`}
                                title={MovieDetail.title}
                                runtime={MovieDetail.runtime}
                                movieId={movieId}
                                 userId={userId}
                                  {...props}/>
                                <p>{MovieDetail.overview} </p>
                                <h3>{Directer.name}</h3>
                            </div>
                        </div>
                    </div>
                </MovieDetailImage>
            }
            { Casts &&
            <div className="gird_cards">  
                {Casts.map(cast => {
                    return (
                        cast.profile_path ? 
                            <div className="gird_card">  
                                <img alt="사진" src={ `${IMAGE_BASE_URL}w500${cast.profile_path}`}/>
                            </div>
                        : null
                        )    
                    })}
            </div>
            }
        </div>
    )
}

export default DetailPage
