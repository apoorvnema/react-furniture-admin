import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import theme from "./assets/theme"
import { Box, Button, ThemeProvider } from "@mui/material"
import Home from "./pages/Home"
import { useSelector } from "react-redux"
import { authAction } from './store/auth'

function App() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    dispatch(authAction.logout());
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {token && (
          <>
            <Route path="/" element={<><Box
                    sx={{
                        position: 'fixed',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10000,
                    }}
                >
                    <Button variant="contained" color="secondary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Box><Home /></>} />
            <Route path="/login" element={<Navigate to="/" />} />
          </>
        )}
        {!token && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  )
}

export default App
