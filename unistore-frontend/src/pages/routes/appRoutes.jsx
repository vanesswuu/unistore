import { Routes, Route } from "react-router-dom";

// user pages
import Home from "../user/home";
import Shop from "../user/shop";
import ProductDetails from "../user/productDetails";
import Cart from "../user/cart";
import Checkout from "../user/checkout";
import Receipt from "../user/receipt";
import Claim from "../user/claim";
import Login from "../user/login";
import Register from "../user/register";
import Profile from "../user/profile";
import OrderHistory from "../user/orderHistory";

// admin pages
import AdminLogin from "../admin/adminLogin";
import AdminDashboard from "../admin/adminDashboard";
import AdminProducts from "../admin/adminProducts";
import AdminAddProduct from "../admin/adminAddProduct";
import AdminEditProduct from "../admin/adminEditProduct";
import AdminOrders from "../admin/adminOrders";
import AdminOrderDetails from "../admin/adminOrderDetails";
import AdminInventory from "../admin/adminInventory";
import AdminCategories from "../admin/adminCategories";
import AdminUsers from "../admin/adminUsers";

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