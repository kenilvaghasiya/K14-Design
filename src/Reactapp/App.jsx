import Nav from './Nav';
import Home from "./Home"
import Services from "./Services"
import About from "./About"
import ContactUs from "./ContactUs"
import React, {useEffect} from 'react';
import { Switch,Route ,Redirect} from 'react-router-dom';
import Cursor from './Cursor';
import Mobile from './Alltecpage/Mobile';
import Website from './Alltecpage/Website2';
import Game from './Alltecpage/Game';
import Login from './admin-panel/Login';
import Adminpanel from './admin-panel/Adminpanel';
import Loding from './Loding'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
    {/* <Cursor/> */}
    <Loding/>
    <Nav/>
    <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/home" component={Home} />
   <Route exact path="/services" component={Services} />
   <Route exact path="/contactus" component={ContactUs} />
   <Route exact path="/about" component={About} />
   <Route exact path="/services/mobile" component={Mobile} />
   <Route exact path="/services/website" component={Website} />
   <Route exact path="/services/game" component={Game} />
   <Route exact path="/login" component={Login} />
   <Route exact path="/admine" component={Adminpanel} />
  <Redirect to="/"></Redirect>
   </Switch>
   


   
 
   </>
  );
}

export default App;
