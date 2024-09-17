import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { setToken } from './redux/slices/auth/authSlice';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { AccountPage } from './pages/AccountPage';
import { TokenLaunchesPage } from './pages/TokenLaunchesPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { WalletPage } from './pages/WalletPage';
import { VerificationPage } from './pages/VerificationPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignupPage';
import { ForgotPassPage } from './pages/ForgotPassPage';
import { PrivateRoute } from './routes/PrivateRoute';
import { useGetUserQuery } from './redux/userApi';
import { setUser } from './redux/slices/user/userSlice';
import './App.scss';

function App() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  const { isSuccess, data, isError, error } = useGetUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
    } else if (isError) {
      console.log(error);
    }
  }, [data, isError, isSuccess, error, dispatch]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forgot-password" element={<ForgotPassPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="token-launches" element={<TokenLaunchesPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="verification" element={<VerificationPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
