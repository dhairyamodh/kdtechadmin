import "./App.css";
import Store from "./redux/store";
import { Provider } from "react-redux";
import Routes from "./routes";
import theme from "./contants/theme";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
function App() {
  return (
    <div className="App">
      <Provider store={Store()}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </div>
  );
}

export default App;
