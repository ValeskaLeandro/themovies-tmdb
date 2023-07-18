import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Home from './pages/Home/index.jsx'
import Search from './pages/Search/index.jsx'
import Movie from './pages/Movie/index.jsx'
import Genre from './pages/Genre/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
          <Route path='/genre/:id/:name' element={<Genre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
