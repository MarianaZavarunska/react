import "./App.css";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div>
      <div className="main">
      <div className="users-wrapper"><Users /></div>
      <div className="posts-wrapper"><Posts /></div>
      </div>
      <div className="footer">
        <Comments/>
      </div>
   
    
    </div>
  )
  
}

export default App;
