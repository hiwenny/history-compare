import React from 'react';

export default class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // error reporting here sending stacktrace
    // ever since react 16 it's futile to try and show a replacement UI, since everything gets unmounted
    // possibly still useful for reporting - New Relic and the likes.
    // reportError(error, errorInfo)
    console.error(error);
  }

  render() {
    // Just render children if all is fine.
    return this.props.children;
  }
}
