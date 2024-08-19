import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { TokenLaunchesPage } from './pages/TokenLaunchesPage/TokenLaunchesPage';
import { TransactionsPage } from './pages/TransactionsPage/TransactionsPage';
import { WalletPage } from './pages/WalletPage/WalletPage';
import { VerificationPage } from './pages/VerificationPage/VerificationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignUpPage } from './pages/SignUpPage/SignupPage';
import { ForgotPassPage } from './pages/ForgotPassPage/ForgotPassPage';
import { PrivateRoute } from './routes/PrivateRoute';
import './App.scss';

function App() {
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
