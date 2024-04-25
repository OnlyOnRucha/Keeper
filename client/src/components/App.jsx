import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";


import Update from './Update';
import Read from './Read';
import Create from './Create';
import SignUp from './SignUp';
import LogIn from './LogIn';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header />
        <Footer />
        
        <Routes>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/log-in" element={<LogIn />}/>
        <Route path="/" element={<Create />}/>
        <Route path="/update-note/:id" element={<Update />}/>
        <Route path="/read-note" element={<Read />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
