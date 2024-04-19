import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Routes, Route} from "react-router-dom";
import Navigation from './components/NavBar/Navigation';
import Stories from './components/Stories/Stories';
function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route exact path = "/" element={<Homepage/>}>
          </Route>

          <Route exact path = "/stories" element={<Stories/>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
