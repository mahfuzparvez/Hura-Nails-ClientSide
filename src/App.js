import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import DashBoard from './components/Dashboard/DashBoard';
import ManageOrders from './components/Dashboard/Manage orders/ManageOrders';
import AddProduct from './components/Dashboard/Add Product/AddProduct';
import MakeAnAdmin from './components/Dashboard/Make An Admin/MakeAnAdmin';
import WelcomeDashboard from './components/Dashboard/WelcomeDashboard/WelcomeDashboard';
import UserReview from './components/UserReview/UserReview';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/Home">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/Products">
              <Navbar></Navbar>
              <Products></Products>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/My Review">
              <Navbar></Navbar>
              <UserReview></UserReview>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/Contact Us">
              <Navbar></Navbar>
              <ContactUs></ContactUs>
              <Footer></Footer>
            </Route>
            <Route path="/About Us">
              <Navbar></Navbar>
              <AboutUs></AboutUs>
              <Footer></Footer>
            </Route>
            <Route path="/Login">
              <Navbar></Navbar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Navbar></Navbar>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <AdminRoute path="/Dashboard">
              <DashBoard></DashBoard>
              <WelcomeDashboard></WelcomeDashboard>
            </AdminRoute>
            <AdminRoute path="/Manage Orders">
              <DashBoard></DashBoard>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path="/Add Product">
              <DashBoard></DashBoard>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path="/Make An Admin">
              <DashBoard></DashBoard>
              <MakeAnAdmin></MakeAnAdmin>
            </AdminRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
