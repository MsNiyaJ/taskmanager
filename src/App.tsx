import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '.';

function App() {
  const display = useSelector((state: RootState) => state.display);

  const styles = {
    theme: {
      backgroundColor: display === 'dark' ? '#000' : '#fff',
      color: display === 'dark' ? '#fff' : '#000',
      width: '100vw',
      height: '100vh',
    },
  };

  return (
    <div className="App" style={styles.theme}>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
