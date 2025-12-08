import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";
import AppRoutes from "./pages/routes/appRoutes";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
