import React from 'react';

export default interface Theme {
  className?: string;
}

export const withClassName = (Component: React.ComponentType<any>) => {
  return ({ className }: Theme) => (
    <div className={className}>
      <Component />
    </div>
  );
};
