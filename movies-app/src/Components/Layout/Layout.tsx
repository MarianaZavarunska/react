import  { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MoviesPage from '../../pages/MoviesPage';
import Header from '../Header/Header';






const Layout:FC = () => {
    return (
        <div>
           <Header/>
           <MoviesPage/>
           <Outlet/>
        </div>
    );
  
};

export default Layout;