import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Calculator from 'src/components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/calculator',
      element: <Calculator />,
    },
    {
      path: '/quote',
      element: <Quotes />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
