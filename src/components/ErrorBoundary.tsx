import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component that catches JavaScript errors anywhere in its child component tree.
 * Displays a fallback UI when an error occurs instead of crashing the whole app.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  /**
   * Static method called when an error is thrown in a child component.
   * Returns the new state to be used for rendering the fallback UI.
   */
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Lifecycle method called after an error has been thrown by a descendant component.
   * Used for logging error information for debugging purposes.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Preserve error logging for debugging purposes
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-4">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}