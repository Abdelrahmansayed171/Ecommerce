import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'

function App() {
  return (
    <Router>
      <Header/>
      {/* // add some spacing using bootstrap which is imported from theme w've downloaded */}
      <main className= "py-3">
        <Container>
          {/* <HomeScreen/> */}
          <Routes>

            <Route path='/' element={<HomeScreen />} exact />

            {/* dynamic path */}
            <Route path='/product/:id' element={<ProductScreen />} />
          
          </Routes>
        </Container>
      </main>
      <Footer/>

    </Router>
  );
}

export default App;
