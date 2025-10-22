import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthLayout } from './layouts/Auth/AuthLayout';
import { createHashRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Layout } from './layouts/Menu/Layout';
import Menu from './pages/Menu/Menu';
import { Error as ErrorPage } from './pages/Error/Error';
const router = createHashRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element:  <Suspense fallback={<>Загрузка</>}><Menu/></Suspense>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [ 
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
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