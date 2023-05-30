import { FC } from 'react';
import { Link } from 'react-router-dom';

export const LoginPage: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Dont have account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};
