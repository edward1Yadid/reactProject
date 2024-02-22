

import './App.css';
import Layout from "./Layout/Layout"
import Router from './core/router/Router';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from "./ui/Providers/ThemeProvider"
import { UserProvider } from './ui/Providers/user/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <ThemeProvider>
      <Layout>
      <Router/>
      </Layout>
      </ThemeProvider>
      </UserProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
