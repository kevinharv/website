/*
Application Root for site
Author: Kevin Harvey
Date: 20221012
Overview: React Router implemented to control page flow of application. Register new paths by creating additional routes in the app root below.
*/

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import NoPage from './pages/NoPage'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
