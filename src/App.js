import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './app-router/AppRouter';
import "./App.css"
import AuthContextProvider from "./contexts/AuthContext"
import { ToastContainer } from 'react-toastify';
import BlogContextProvider from './contexts/BlogContext';


const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
        <AppRouter/>
        <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App