import { Routes, Route } from "react-router-dom";

// user pages
import Home from "../pages/user/home";
import Shop from "../pages/user/shop";
import ProductDetails from "../pages/user/productDetails";
import Cart from "../pages/user/cart";
import Checkout from "../pages/user/checkout";
import Receipt from "../pages/user/receipt";
import Claim from "../pages/user/claim";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Profile from "../pages/user/profile";
import OrderHistory from "../pages/user/orderHistory";

// admin pages
import AdminLogin from "../pages/admin/adminLogin";
import AdminDashboard from "../pages/admin/adminDashboard";
import AdminProducts from "../pages/admin/adminProducts";
import AdminAddProduct from "../pages/admin/adminAddProduct";
import AdminEditProduct from "../pages/admin/adminEditProduct";
import AdminOrders from "../pages/admin/adminOrders";
import AdminOrderDetails from "../pages/admin/adminOrderDetails";
import AdminInventory from "../pages/admin/adminInventory";
import AdminCategories from "../pages/admin/adminCategories";
import AdminUsers from "../pages/admin/adminUsers";

function AppRoutes() {
  return (
    <Routes>

      {/* user routes */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/receipt" element={<Receipt />} />
      <Route path="/claim" element={<Claim />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<OrderHistory />} />

      {/* admin routes */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/products/add" element={<AdminAddProduct />} />
      <Route path="/admin/products/edit/:id" element={<AdminEditProduct />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
      <Route path="/admin/inventory" element={<AdminInventory />} />
      <Route path="/admin/categories" element={<AdminCategories />} />
      <Route path="/admin/users" element={<AdminUsers />} />

    </Routes>
  );
}

export default AppRoutes;
