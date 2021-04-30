import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {
    API_URL,
    API_KEY,
} from '../../Config.js';
import GridCards from './section/GridCards/GridCards.js';
import MainImage from './section/MainImage/MainImage.js';
import {IMAGE_BASE_URL} from '../../Config.js';

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [PageNumber, setPageNumber] = useState(1)
    const [MainMovie, setMainMovie] = useState(null);

    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${PageNumber}`;
    
    const onClickViewMore = () => {
        setPageNumber(PageNumber+1);
    }

    const requestMovie = () => {
        axios.get(endpoint)
        .then(response => {
            console.log(response.data.results);
            setMainMovie(response.data.results[0]);
            setMovies([...Movies,...response.data.results])
        })
    }

    useEffect(() => {
        requestMovie();
    }, [PageNumber])

    return (
        <div className="landingp_page">
            {MainMovie && 
                <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovie.backdrop_path}`}/>
            }
            {Movies &&
                <GridCards movies={Movies}/>
            }
            <button onClick={onClickViewMore}>
                불러오기
            </button>
        </div>
    )
}

export default LandingPage
