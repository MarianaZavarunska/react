import {FC, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { getAllMovies } from '../../store/slices';
import MovieListCard from '../MovieListCard/MovieListCard';
import './MoviesList.css';


const MoviesList:FC = () => {
    const {movies} = useAppSelector(state => state.moviesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getAllMovies())
    }, []);
    
    return (
        <div className='movies-container'>
        {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/> )} 
        </div>
    );
};

export default MoviesList;