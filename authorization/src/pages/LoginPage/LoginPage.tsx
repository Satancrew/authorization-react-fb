import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../components/Login';

export const LoginPage: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Dont have account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
