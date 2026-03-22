import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', backgroundColor: '#1e293b', color: '#f87171', minHeight: '100vh', fontFamily: 'monospace' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        <summary>Click for error details</summary>
                        <p style={{ marginTop: '1rem', color: '#fca5a5' }}>
                            {this.state.error && this.state.error.toString()}
                        </p>
                        <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </p>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
