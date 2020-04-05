import React, { FunctionComponent }  from 'react';

interface ContainerProps {
  color: 'red' | 'brown',
};

const ContainerComponent: FunctionComponent<ContainerProps> = ({ color, children }) => {
  return (
    <h2 style={{ color }}>
     { children } 
    </h2>
  );
};

export default ContainerComponent;
