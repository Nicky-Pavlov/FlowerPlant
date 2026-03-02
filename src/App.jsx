import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './views/Home';
import MyPlants from './views/MyPlants';
import AboutUs from './views/AboutUs';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/my-plants',
        element: <MyPlants />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
]
, 
{
  basename: "/FlowerPlant"
} 
);

export default function App() {
  return <RouterProvider router={router} />;
}
