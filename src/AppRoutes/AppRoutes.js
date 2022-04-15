import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { AuthContextSupplier } from "../Context/AuthContext/AuthContext";
import { Signup } from "../Pages/Authentication/Signup";
import { Signin } from "../Pages/Authentication/Signin";
import Homepage from "../Pages/Homepage/Homepage";
import { SearchPage } from "../Pages/SearchPage/SearchPage";
import { ForgotPassword } from "../Pages/Authentication/ForgotPassword";
import { Sidebar } from "../Components/Sidebar/Sidebar";
export default function AppRoutes() {
  const { user } = AuthContextSupplier();
  function ProtectRoute() {
    return user ? <Outlet /> : <Navigate to="/sign-up" />;
  }
  function UnProtectRoute() {
    return !user ? <Outlet /> : <Navigate to="/" />;
  }
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route element={<UnProtectRoute />}>
          <Route path="/sign-up" exact element={<Signup />} />
          <Route path="/sign-in" exact element={<Signin />} />
          <Route path="/reset-password" exact element={<ForgotPassword />} />
        </Route>
        <Route element={<ProtectRoute />}>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
