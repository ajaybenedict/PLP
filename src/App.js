import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Shop from "./pages/Shop/Shop";

const Layout = () => {
  return (
    <div>   
      <Outlet />   
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
