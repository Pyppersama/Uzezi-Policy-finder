import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Pages/HomePage';
import PolicyFinder from './Pages/PolicyFinder';
import PolicyDetailPage from './Pages/PolicyDetailPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      < >
        <Nav/>
        <Routes >

          <Route
            path='/'
            element={<Homepage/>}
          />

          <Route
            path='/PolicyFinder'
            element = {<PolicyFinder />}
          />

          <Route
          path='/policy/:key'
          element = {<PolicyDetailPage/>}
          />

        </Routes>
        <Footer />
      </>
  );
}

export default App;
