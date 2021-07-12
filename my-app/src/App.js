// import React from 'react';
// // import {
// //   ApolloClient,
// //   InMemoryCache,
// //   ApolloProvider,
// //   createHttpLink,
// // } from '@apollo/client';
// // import { setContext } from '@apollo/client/link/context';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';


// // import Mainpage from './pages/Mainpage';
// // import Signup from './pages/Signup';
// // import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Mainpage from './pages/Mainpage';



// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     // <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Route exact path="/">
//               <Mainpage />
//             </Route>
//             {/* <Route exact path="/login">
//               <Login />
//             </Route>
//             <Route exact path="/signup">
//               <Signup />
//             </Route> */}
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     // </ApolloProvider>
//   );
// }

import React from "react";
import Mainpage from "./pages/Mainpage";

function App() {
  return <Mainpage />;
}


export default App;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;







// import Footer from './components/Footer';'./components/Footer';
// import Header from './components/Header';'./components/Header';
// import Navigation from './components/Navigation';'./components/Navigation';
// import Project from './components/Project';'./components/Project';