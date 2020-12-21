import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/Themes';
import moonIcon from './imgs/darkMode.png';

const App = () => {
  const [theme, setTheme] = useState('light');
  let themeToggler = () => {theme === 'light' ? setTheme('dark') : setTheme('light')};

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
    <GlobalStyles/>
      <header>
        <h1>ChartIt</h1>
        <img src={moonIcon} alt='Click to toggle mode'onClick={themeToggler} id='moonIcon'/>
      </header>
      <div className="App">
      </div>
    </ThemeProvider>
  );
}

export default App;
