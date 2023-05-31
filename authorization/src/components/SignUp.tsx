import { Form } from './Form';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <Form handleClick={handleRegister} title="Register" />;
};
