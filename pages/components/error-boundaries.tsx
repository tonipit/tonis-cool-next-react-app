import Link from 'next/link';
import { Component, ErrorInfo } from 'react';
import Button from './button/common-html-elements/button';

class ErrorBoundary extends Component {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error({ error, errorInfo });
    }

    render() {
        // return this.props.errorComponent;
        if (this.state.hasError) {
            return (
                <h2>
                    We're sorry, there was an error.
                    <Button type="button" onClick={() => this.setState({ hasError: false })}>
                        Try again? {this.props.error}
                    </Button>
                </h2>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.getDerivedStateFromError();

// const eb = new ErrorBoundary();
// eb.getDerivedStateFromError();

export default ErrorBoundary;
