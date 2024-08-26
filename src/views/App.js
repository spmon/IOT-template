import logo from './logo.svg';
import './App.scss';

import ListTodo from './Todos/ListTodo';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TableComponent from './Example/TableComponent';
import Action from './Example/ActionHistory/Action';
import Profile from './Example/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TableComponent/>} />
            <Route path="/about" element={<Action />} />
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
