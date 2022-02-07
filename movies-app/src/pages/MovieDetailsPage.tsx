import { FC } from 'react';
import { useLocation} from 'react-router-dom';

import { IMovie } from '../interfaces/movie.interface';
import { IMG_PATH } from '../constants/urls';
import MovieInfo from '../Components/MovieInfo/MovieInfo';

const MovieDetailsPage:FC = () => {

    const location = useLocation();
    const movie = location.state as IMovie;
    
    return (
        <div>
             <div>
                <img src={IMG_PATH + movie.poster_path} alt={movie.title}/>
            </div>
          <MovieInfo movie={movie}/>
        </div>
    );
};

export default MovieDetailsPage;