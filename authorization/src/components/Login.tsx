import { Form } from './Form';
import { useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then(accessToken => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: accessToken,
            }),
          );
          navigate('/');
        });
      })
      .catch(() => console.log('пользователь не найден'));
  };

  return <Form handleClick={handleLogin} title="sign in" />;
};
