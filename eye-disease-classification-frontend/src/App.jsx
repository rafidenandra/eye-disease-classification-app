import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadPage from './pages/UploadPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}></Route>
                    <Route path='/upload' element={<UploadPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
