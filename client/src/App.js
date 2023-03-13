
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EditContact from './Components/EditContact';
import AddContact from './Components/AddContact';
import ListContact from './Components/ListContact';
import Home from './Components/Home';
import NavContact from './Components/NavContact';

function App() {
  return (
   <div>
    <NavContact/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ListContact' element={<ListContact/>}/>
      <Route path='/addcontact' element={<AddContact/>}/>
      <Route path='/editcontact/:id' element={<EditContact/>}/>

    </Routes>
   </div>
  );
}

export default App;
