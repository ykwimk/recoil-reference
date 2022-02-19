import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HeaderWrapper } from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderWrapper>
      <div className="header-wrap">
        {location.pathname === '/' ? (
          <button
            type="button"
            className="button"
            onClick={() => navigate('/todo')}
          >
            Go to TodoList
          </button>
        ) : (
          <button
            type="button"
            className="button"
            onClick={() => navigate('/')}
          >
            Go to List
          </button>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
