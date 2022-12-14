import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routers/Routers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />

    </div>
  );
}

export default App;
