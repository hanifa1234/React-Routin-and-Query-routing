

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';



import Home from "./Ract-Rouder/Page/Home"
import Contract from "./Ract-Rouder/Page/Contract"
import Blog from "./Ract-Rouder/Page/Blog"
import Blogs from "./Ract-Rouder/Page/Blogs"
import Error from "./Ract-Rouder/Page/Error"
import User from "./Ract-Rouder/Page/User"





function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={ <Home/> } />
        <Route path='/Contract' element={ <Contract/> } />
        <Route path='/Blog' element={ <Blog/> } />
        <Route path='/Blog/:title' element={ <Blogs/> } />
        <Route path='/' element={ <Error/> } />
        <Route path='/User/:userid' element={ <User/> } />
        <Route path='/User' element={ <User/> } />
      
      </Routes>
    </BrowserRouter>
  ) 
}
// /home -> <Home/>
// /Contract -> <Contract/>
export default App;
