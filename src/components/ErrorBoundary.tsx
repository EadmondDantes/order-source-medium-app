import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Banner, Page } from '@shopify/polaris';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Page>
          <Banner
            title="Something went wrong"
            status="critical"
          >
            <p>Please refresh the page or contact support if the problem persists.</p>
            <p className="text-sm text-gray-600 mt-2">
              Error: {this.state.error?.message}
            </p>
          </Banner>
        </Page>
      );
    }

    return this.props.children;
  }
}