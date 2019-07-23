import React from 'react';

export default interface Theme {
  className?: string;
}

export function withClassName<P>(Component: React.ComponentType<P>) {
  return class WithClassName extends React.Component<P & Theme, P> {
    render() {
      const { className, ...props } = this.props;
      return (
        <div className={className}>
          <Component {...props as P} />
        </div>
      );
    }
  };
}