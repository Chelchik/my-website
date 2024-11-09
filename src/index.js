import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContext } from './context';

function Change() {
const [theme, setTheme] = useState(false)
  
  return (
  <ThemeContext.Provider value={{theme, setTheme}}>
    <App />  
  </ThemeContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Change />
);