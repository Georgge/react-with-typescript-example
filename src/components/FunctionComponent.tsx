import React from 'react';

interface Props {
  color: 'silver' | 'aqua',
}  

function FunctionComponent({ color }: Props) {
  return (
    <h3 style={{ color }}>Function</h3>
  );
} 

export default FunctionComponent;

FunctionComponent.defaultProps = {
  color: 'aqua'
};
