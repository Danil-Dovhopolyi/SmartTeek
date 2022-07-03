import { useState, useContext } from 'react';
import './App.css';
import ThemeContext, { themes } from './ThemeContext';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const themes = useContext(ThemeContext);

  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
          style={theme}
        >
          <h2>Content 1</h2>
          <hr />
          <button className="theme" onClick={toggleTheme}>
            Swap Theme
          </button>
          <p>Text 1</p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
          style={theme}
        >
          <h2>Content 2</h2>
          <hr />
          <button className="theme" onClick={toggleTheme}>
            Swap Theme
          </button>
          <p>Text 2</p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
          style={theme}
        >
          <h2>Content 3</h2>
          <hr />
          <button className="theme" onClick={toggleTheme}>
            Swap Theme
          </button>
          <p>Text 3</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
