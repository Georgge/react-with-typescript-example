import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({ color }) => color}`;

type Props = {
  color: 'white' | 'green',
  bgColor?: string,
}

function StyledComponent({ color, bgColor } : Props) {
  const boxProps = { color: bgColor };

  return (
    <Box {...boxProps} >
      <h1 style={{ color }}>
        okis
      </h1>
    </Box>
  );
}

export default StyledComponent;


