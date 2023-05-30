import { FC } from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage: FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
