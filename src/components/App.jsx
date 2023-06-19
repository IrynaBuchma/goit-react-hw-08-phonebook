import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from 'pages/HomePage/HomePage';
import Layout from "./Layout/Layout.jsx";
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { RestrictedRoute } from "userMenu/RestrictedRoute";
import LoginPage from "pages/LoginPage/LoginPage";


export const App = () => {
  return (
    <>
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
          {/* <Route 
            path='/contacts'
            element={
              <PrivatRoute
                redirectTo={'/login'}
                component={<ContactsPage />}
              /> 
            }
          /> */}
          <Route path="*" element={<Navigate to={'/'}/>} />
          </Route>
      </Routes>
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
