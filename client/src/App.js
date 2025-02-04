import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { Router } from './pages/Router';
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rough" element={<Rough />} />
          <Route path="/rough2" element={<Rough2 />} />
          <Route path="/rough3" element={<Rough3 />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/explorer" element={<EmbeddedSandbox />} />
        </Routes> */}
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
