import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Main from './main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
