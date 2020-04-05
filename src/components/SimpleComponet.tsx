import React, { FunctionComponent } from 'react';

/**
 * Simple component with simple props
 */

interface SimpleProps {
  color: 'orange' | 'green';
}

const SimpleComponent: FunctionComponent<SimpleProps> = ({ color }) => (
  <h1 style={{ color }}>Hi</h1>
);

export default SimpleComponent;
