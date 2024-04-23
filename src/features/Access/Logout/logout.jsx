import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './logoutSlice';
import { useEffect } from 'react';

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(state => state.logout.status);

  useEffect(() => {
    // When the status changes to 'succeeded', navigate to the login page
    if(status === 'succeeded' || status === 'failed') {
      localStorage.removeItem('user'); 
      localStorage.removeItem('tokens'); 
      window.location.href = 'http://localhost:3000'
    }
  }, [status, navigate]);

  const handleLogout = async () => {
    try {
     dispatch(logout());
      // No need to check status here since it is being checked in the useEffect above
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return handleLogout;
}