import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import StudentDashboard from "./pages/StudentDashboard.tsx";
import TeacherDashboard from "./pages/TeacherDashboard.tsx";
import SimulationsPage from "./pages/SimulationsPage.tsx";
import SimulationDetailPage from "./pages/SimulationDetailPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import AdminSchoolPage from "./pages/AdminSchoolPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/simulations" element={<SimulationsPage />} />
        <Route path="/simulation/:id" element={<SimulationDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminSchoolPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
