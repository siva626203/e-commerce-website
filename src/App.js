import Footer from './components/footer';
import Header from './components/header';
import Slideshow from './components/slide';
import Student from './pages/home'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Body from './components/body';
import { Fragment } from 'react';

function App() {
  return (
    <div>
      <Header />
      
      
      <Routes>
        <Route path='/' exact element={<Slideshow />}></Route>
        
         <Route path='/student' element={<Student />} />
      </Routes>
      <Body />
      
      <Footer />
      </div>
  );
}

export default App;
