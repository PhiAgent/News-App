
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Title from './components/Header/Title';
import Footer from './components/Footer/Footer';

interface Props {
   name:
    string
}

const App = () => {

  return (
    <>
      <Title/>
      <Footer/>
    </>
  );
}

export default App;
