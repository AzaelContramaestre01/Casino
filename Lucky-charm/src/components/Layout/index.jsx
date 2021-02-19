import React, { useReducer, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import HomePage from '../../Pagogo/Template';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { reducer } from '../../reducers/reducer';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false, balance: 100, record: [] };

function Layout() {
  const [user, dispatch] = useReducer(reducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <div className="App">
        <Navbar />
        <div className="body-page">
          <HomePage />
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default Layout;
