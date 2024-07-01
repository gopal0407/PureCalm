import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Spinner animation="border" role="status" variant="success">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <img src="/PureCalm.jpg" alt="PureCalm" style={{ width: '50px', height: '50px', marginLeft: '10px' }} />
    </div>
  );
};

export default Loader;
