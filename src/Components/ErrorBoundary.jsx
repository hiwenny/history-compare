import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // error reporting here sending stacktrace
    // ever since react 16 it's futile to try and show a replacement UI, since everything gets unmounted
    // ...or is it? Time to find out in prod mode.
    // possibly still useful for reporting - New Relic and the likes.
    // reportError(error, errorInfo)
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Just render children if all is fine.
    return this.props.children;
  }
}
