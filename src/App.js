import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HotelDetails from '../src/components/HotelDetails';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/hotel/:slug" element={<HotelDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
