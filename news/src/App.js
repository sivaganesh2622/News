import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Updates from './Components/Updates';
import Updatesitem from './Components/Updatesitem';

function App() {
   const [Category,setCategory] = useState("general")
  return (
    <>
    <Navbar setcategory={setCategory}/>
    <h1 className='text-center p-3'>Daily<span class="badge bg-danger mx-2">Updates</span></h1>
    <Updates category={Category}/>
    <Updatesitem category={Category}/>
    </>
  );
}

export default App;
