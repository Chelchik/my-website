import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context';
import PopuluarFilm from './components/PopuluarFilm';
import FilmsSwiper from './components/FilmsSwiper';


function App() {
  const {theme, setTheme} = useContext(ThemeContext)

  const btnStyles = {
    width: "15px",
    height: "15px",
    backgroundColor: theme ? "white" : "#fef700",
    borderRadius: "50%",
    border: "none",
    position: "absolute",
    top: "3px",
    left: theme ? "22px" : "2px",
    transition: "all 0.5s",
  }

  const linkStyle = {
    color: theme ? "white" : "#000",
  }

  const isDarkFunc = () => {
    setTheme(!theme)
    console.log(theme);
  }

  return (
    <div className="root" style={{backgroundColor: theme ? "rgb(19, 19, 31)" : "#f1f1f1"}}>
        <header>
          <nav>
            <ul className='menu'>
              <li className='menu-bar'><a href='#' style={linkStyle}>HOME</a></li>
            
              <li className='menu-bar'><a href='#' style={linkStyle}>MOVIES</a></li>
            
              <li className='menu-bar'><a href='#' style={linkStyle}>SERIALS</a></li>
            
              <li className='menu-bar'><a href='#' style={linkStyle}>MY LIST</a></li>
            </ul>
          </nav>

          <div className='theme-btn-box' onClick={isDarkFunc} style={{backgroundColor: theme ? "#0f0f0f" : "#00eeec"}}>
            <button style={btnStyles}></button>
          </div>
        </header>

        <div className='cont'>
          <div className='swiper'>
              <PopuluarFilm />
          </div>

          <div className='filmsSwiper'>
              <FilmsSwiper />
          </div>
        </div>
    </div>
  );
}

export default App;
