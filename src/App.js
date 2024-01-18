import './App.css';
import React from 'react'
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import { Routes, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Suspense } from 'react';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <main className='main'>
            <Navbar />
            <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />}></Route>
              <Route path='/dialogs/*' element={<DialogsContainer />}></Route>
              <Route path='/news' element={<News />}></Route>
              <Route path='/music' element={<Music />}></Route>
              <Route path='/users' element={<UsersContainer />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
            </Suspense>
          </main>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

