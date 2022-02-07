import { FC } from 'react';
import { IMovie } from '../../interfaces/movie.interface';

const MovieInfo:FC<{movie:IMovie}> = ({movie}) => {
    return (
        <div className='movie-info'>
             <div>{movie.id}</div>
            <div>{movie.adult}</div>
            <div>{movie.title}</div>
            <div>{movie.original_title}</div>
            <div>{movie.original_language}</div>
            <div>{movie.release_date}</div>
            <div>{movie.overview}</div>
        </div>
    );
};

export default MovieInfo;