import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthLayout from './layouts/Auth/AuthLayout';
import { createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Register from './pages/Register/Register';
 
const router = createHashRouter([
  {
    path: '/',
    element: <AuthLayout/>,
    children: [ 
      {
        path: '/',
        element: <Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


     /*   return defer({
            data:  axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
          });
 */
         /*  await new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
          const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
          return data; */