import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/styles.scss';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

        {/* <Route path="/" element={<Header />} /> */}
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="profile" element={<Profile />} />
    //     <Route path="settings" element={<Settings />} />

    //   </Routes>
    // </BrowserRouter>
    // <div className="App">

    //   <Header />
    //   <HomePage />

    // </div>
  );
}

export default App;
