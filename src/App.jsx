// import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
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
