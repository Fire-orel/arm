// import logo from './logo.svg';
import { element } from 'prop-types';
import Bar from './components/Bar/Bar';
import Pacient from './components/pacient/Pacient';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Table_prinitie from './components/Table_prinitie';
import Table_zapis from './components/Table_zapis';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Bar/>,
    children:[
      {
        path:'/',
        element: <Table_prinitie />
      },
      {
        path:'/Table',
        element:<Table_zapis />
      }
      
    ]
    
  },
  {
    path:'/pacient',
    element: <Pacient />
  }
])
function App() {
  return ( 
    <RouterProvider router={router} />
  );
}

export default App;
