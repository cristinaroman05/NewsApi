
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import News from './News/News';
import NewsSection from './NewsSection/NewsSection';
import Header from './Header/Header';


function App() {
  return (

    <div className="app">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/noticias' element={<News></News>}></Route>
          <Route path='/noticias/:topic' element={<NewsSection></NewsSection>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
