import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Pages/Home/Home';
import Others from './components/Post/Sports/Others/Others';
import Write  from './components/Pages/Write/Write';
import WriteSports from './components/Pages/Write/WriteSports/WriteSports';
import WriteEnt from './components/Pages/Write/WriteEnt/WriteEnt';
import SportsPage from './components/Post/Sports/Sports';
import Ent from './components/Post/Ent/Ent';
import FullDetail from './components/Pages/FullDetail/FullDetail';
import FullDetailSports from './components/Pages/FullDetail/FullDetailSports/FullDetailSports';
import FullDetailEnt from './components/Pages/FullDetail/FullDetailEnt/FullDetailEnt';
import EditPost from './components/Pages/EditPost/EditPost';
import EditSports from './components/Pages/EditPost/EditSports/EditSports';
import EditEnt from './components/Pages/EditPost/EditEnt/EditEnt';
import Settings from "./components/Pages/Settings/Settings";
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Login/Login';
import Footer from './components/Footer/Footer';
// import { createBrowserHistory } from 'history';

export default function App() {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));

  // const history = createBrowserHistory()

    return (
      <Router >
        <TopBar />
        <Switch>
          <Route exact path="/" component={()=> <Redirect to='/allPosts' />} />
          <Route exact path="/allPosts" component={ Home} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/write_sports" component={WriteSports} />
          <Route exact path="/write_ent" component={WriteEnt} />
          <Route exact path="/sports" component={SportsPage} />
          <Route exact path="/others" component={Others} />
          <Route exact path="/entertainment" component={Ent} />
          <Route exact path="/edit_post/:id" component={EditPost} />
          <Route exact path="/edit_sports/:id" component={EditSports} />
          <Route exact path="/edit_ent/:id" component={EditEnt} />
          <Route exact path="/full_detail/:id" component={FullDetail} />
          <Route exact path="/full_detail_sports/:id" component={FullDetailSports} />
          <Route exact path="/full_detail_ent/:id" component={FullDetailEnt} />
          <Route exact path="/settings" component={!user ? Home : Settings} />
          <Route exact path="/register" component={()=>(!user ? <Register /> : <Redirect to='/allPosts' />)} />
          <Route exact path="/login" component={()=>(!user ? <Login /> : <Redirect to='/allPosts' />)} />
        </Switch>
        <Footer />
      </Router>
    );
}
