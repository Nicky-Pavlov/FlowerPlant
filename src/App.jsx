import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './views/Home';
import MyPlants from './views/MyPlants';
import AddPlant from './views/AddPlant';
import EditPlant from './views/EditPlant';
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
        path: '/my-plants/new',
        element: <AddPlant />,
      },
      {
        path: '/my-plants/:plantId/edit',
        element: <EditPlant />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
],
{
  basename: '/FlowerPlant',
});

export default function App() {
  return <RouterProvider router={router} />;
}
