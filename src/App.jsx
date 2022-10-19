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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPsMUDPzwZGgSHBhueLzWtgqEXnf0yZM",
  authDomain: "personal-site-3c2b5.firebaseapp.com",
  projectId: "personal-site-3c2b5",
  storageBucket: "personal-site-3c2b5.appspot.com",
  messagingSenderId: "632877174472",
  appId: "1:632877174472:web:feec315d42eec7ac391ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




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
