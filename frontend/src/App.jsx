import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Platos from './paginas/Platos';
import Usuarios from './paginas/Usuarios';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Platos />} />
          <Route path='usuarios' element={<Usuarios/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
