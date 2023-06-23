import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
// import HomePage from 'pages/HomePage/HomePage';
import Layout from "./Layout/Layout.jsx";
// import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { RestrictedRoute } from "userMenu/RestrictedRoute";
import { PrivateRoute } from '../userMenu/PrivateRoute.js';
// import LoginPage from "pages/LoginPage/LoginPage";
import { useAuth } from "hooks/useAuth.js";
import { refreshUser } from "redux/auth/authOperations.js";
import { useDispatch } from "react-redux";
import { Loading } from 'notiflix'

const HomePage = lazy(() =>import('../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'))


export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
    {isRefreshing ? Loading.pulse() : Loading.remove()}
    {!isRefreshing && (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path='/register' element={
              <RestrictedRoute 
                redirectTo={'/contacts'} 
                component={<RegistrationPage />}
              />
            }/>
            <Route path='/login' element={
                <RestrictedRoute 
                directTo={'/contacts'}
                component={<LoginPage />}
                />
              }/>
          <Route 
            path='/contacts'
            element={
              <PrivateRoute
                redirectTo={'/login'}
                component={<ContactsPage />}
              /> 
            }
          />
          <Route path="*" element={<Navigate to={'/'}/>} />
          </Route>
      </Routes>
    )}
  </>
 )
}

// return ( 
//   <div 
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
