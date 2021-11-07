import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = ({showNav, setShowNav}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button id="logout-btn" onClick={onLogout}>tCowout</button>;
};

export default LogoutButton;
