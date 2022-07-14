import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Homepage from './homepage';
import AddBook from './Createbook';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/addbook' element={<AddBook/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
