import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/CommonMenu/Home/Home/Home';
import Hotels from './Pages/CommonMenu/Hotels/Hotels';
import Transports from './Pages/CommonMenu/Transports/Transports';
import PlaceOrder from './Pages/PrivateMenu/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/PrivateMenu/MyOrder/MyOrder';
import ManageOrder from './Pages/PrivateMenu/ManageOrder/ManageOrder';
import AddService from './Pages/PrivateMenu/AddService/AddService';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/hotels">
            <Hotels></Hotels>
          </Route>
          <Route exact path="/transports">
            <Transports></Transports>
          </Route>
          <Route exact path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route exact path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
