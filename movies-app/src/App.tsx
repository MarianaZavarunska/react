import {FC} from 'react'
import { Routes,Route, Navigate } from 'react-router-dom';

import './App.css';
import Layout from './Components/Layout/Layout';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';


const App:FC = () => {
  return (
    <div>
     <Routes>
       <Route path={"/"} element={<Layout />}>
       <Route index element={<Navigate to={"movies"} />}/>
         <Route path={"movies"} element={<MoviesPage/>}></Route>
       </Route>
       <Route path={"details"} element={<MovieDetailsPage/>}></Route>
     </Routes>

    </div>
  );
};

export default App;