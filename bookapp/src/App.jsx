import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import Filter from "./components/home/Filter";
import FavoriteBooks from "./components/home/FavoriteBooks";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import GenrecardFav from "./components/home/GenrecardFav";
import './App.css';



function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/filter",
      element: <Filter/>,
    },
    {
      path: "/favorite",
      element: <FavoriteBooks/>,
    },
    {
      path: "/genrefav",
      element: <GenrecardFav/>,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
