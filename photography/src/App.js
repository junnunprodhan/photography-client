
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <RouterProvider router={routes} ></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
