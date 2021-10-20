import React from 'react';
import ThreeSectionCard from './components/molecules/ThreeSectionCard';
import CarIcon from './components/assets/car-icn-tc.svg';
import VeygoIcon from './components/assets/veygo.svg'
import Sparkles from './components/assets/sparkles.svg';
import { GenericTheme } from './utils';
import './App.css';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="CFG-x-Veygo">
      <header className="App-header">
        <ThemeProvider theme={GenericTheme}>
          <ThreeSectionCard
            icon={CarIcon}
            title={'CFG x Veygo'}
            buttonId={'buttonId'}
            tag
            tagText={'new'}
            tagIcon={Sparkles}
            fullWidthButton
            buttonText={'Click me'}
            buttonAction={() => {window.alert(`Hello world`)}}
            >
              <p>
              We're going to learn how to use Storybook with React components.
              </p>
          </ThreeSectionCard>
        </ThemeProvider>
        <p>
          Let's learn Storybook!
        </p>
        <img src={VeygoIcon} alt={'Veygo logo'}/>
      </header>
    </div>
  );
}

export default App;
