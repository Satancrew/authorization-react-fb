import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';

export const HomePage: FC = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return isAuth ? (
    <div>
      <h1>Home page</h1>
      <button onClick={() => dispatch(removeUser())}>
        Logout from this {email}
      </button>
    </div>
  ) : (
    <div>
    <h1>Home page</h1>
    <Link to="/login">Sign in</Link>
  </div>
  );
};
