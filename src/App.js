import "./App.css";
import Layout from "./Layout/Layout";
import Router from "./core/router/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ui/Providers/ThemeProvider";
import { UserProvider } from "./ui/Providers/user/UserProvider";
import SnackbarProvider from "./ui/Providers/SnackBarProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
