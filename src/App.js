import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/styles/globalStyles';
import {lightTheme, darkTheme} from './components/styles/themes';
import {Header} from './components/header';
import {SignUpView, LoginView} from './components/authView';
import {Home} from './components/home';
import {Footer} from './components/footer';

const App = () => {
  const [theme, setTheme] = useState('light');
  let themeToggler = () => {theme === 'light' ? setTheme('dark') : setTheme('light');}

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
    <GlobalStyles/>
      <div className="App">
      <Header themeToggler={themeToggler} theme={theme} />
      <Switch>
        <Route exact path='/' render= {(props) => <Home {...props} theme={theme}/>} />
        <Route path='/SignUp' component={SignUpView} />
        <Route path='/Login' component={LoginView} />
      </Switch>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
