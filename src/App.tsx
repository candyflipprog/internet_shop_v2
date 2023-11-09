import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';

function App() {
    return (
        <BrowserRouter>
            <div className="App mt-12">
                <Routes>
                    <Route path="/" element={<NavBar />}/>
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
