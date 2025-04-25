import React, { Suspense, lazy ,useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Components/Navbar/Nav';
import { useDispatch } from "react-redux";
import { setUser ,clearUser} from './Components/redux/authSlice';


const Home = lazy(() => import('./Components/Pages/Home/Home'));
const TourList = lazy(() => import('./Components/Pages/Tour/TourList'));
const About = lazy(() => import('./Components/Pages/About/About'));
const Login = lazy(() => import('./Components/Pages/SignIn/Login'));
const SignUp = lazy(() => import('./Components/Pages/SignIn/SignUp'));
const Contact = lazy(() => import('./Components/Pages/contact/Contact'));
const AdminDashboard = lazy(() => import('./Components/admin/AdminDashboard'));
const TourDetails = lazy(() => import('./Components/Pages/TourDetails/TourDetails'));
const Booking = lazy(() => import('./Components/Pages/Booking/Booking'));
const MyBookings = lazy(() => import('./Components/Pages/Booking/MyBookings'));
const PaymentSuccess = lazy(() => import('./Components/Pages/Booking/PaymentSuccess'));

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // prevent premature render

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/me", {
          withCredentials: true
        });
        dispatch(setUser(res.data)); // 👈 sets user and isAuthenticated = true
      } catch (err) {
        dispatch(clearUser());
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, [dispatch]);

  if (loading) return <p className='mt-40 text-center text-4xl'>Checking login...</p>

  return (
    <Router>
      <Nav />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<TourList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/book/:tourId" element={<Booking />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
