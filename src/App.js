import React from 'react';

import SimpleComponent from './components/SimpleComponet';
import ContainerComponent from './components/ContainerComponent';
import FunctionComponent from './components/FunctionComponent';
import StyledComponent from './components/StyledComponent';

function App() {
  return (
    <div>
      <SimpleComponent color="green" />
      <ContainerComponent color="brown">
        Child  
      </ContainerComponent>
      <FunctionComponent />
      <StyledComponent color="green">
        Styled
      </StyledComponent>
    </div>
  );
}

export default App;
