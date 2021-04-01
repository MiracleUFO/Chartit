import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/themes';
import {Header} from './components/header';
import {SignUpView, LoginView} from './components/authView';
import {Home} from './components/home';



const App = () => {
  const [theme, setTheme] = useState('light');
  let themeToggler = () => {theme === 'light' ? setTheme('dark') : setTheme('light');}

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
    <GlobalStyles/>
      <div className="App">
      <Header themeToggler={themeToggler} theme={theme} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/SignUp' component={SignUpView} />
          <Route path='/Login' component={LoginView} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
