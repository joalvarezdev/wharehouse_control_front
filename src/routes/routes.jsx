import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Configuration } from "../pages/Configuration";
import { Logout } from "../pages/Logout";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}
