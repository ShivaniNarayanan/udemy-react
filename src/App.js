import Navbar from '../src/components/Navbar';
import Topics from '../src/components/Topics';
import Sale from '../src/components/Sale';
import Recommended from '../src/components/Recommended';
import Footer from '../src/components/Footer';
import Categories from '../src/components/Categories';
import popular from '../src/components/popular';

function App(){
    return(<div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Sale></Sale>
        <Recommended></Recommended>
        <Topics></Topics>
        <popular></popular>
        <Footer></Footer>
      </div>)
}

export default App