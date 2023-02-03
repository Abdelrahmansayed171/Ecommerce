import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import HomeScreen from './screens/HomeScreen.js'

function App() {
  return (
    <div>
      <Header/>
      {/* // add some spacing using bootstrap which is imported from theme w've downloaded */}
      <main className= "py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>

    </div>
  );
}

export default App;
