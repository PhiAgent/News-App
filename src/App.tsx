
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Title from './components/Header/Title';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

interface Props {
   name:
    string
}

const App = () => {

  return (
    <>
      <Title/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
