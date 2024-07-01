import './errorcode.css';

const ErrorCode = () => {
    return (
        <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404</h1>
        <p className="error-message">Oops! Page not found.</p>
        <p className="error-description">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="error-link">Go back to homepage</a>
      </div>
    </div>
    );
}

export default ErrorCode;
