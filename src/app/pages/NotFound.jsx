import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const NotFound = () => (
  <PageWrapper title="Oops :(">
    <p>The page you are looking for does not exist!</p>
    <p>
      Click <Link to="/">here</Link> to go to home page.
    </p>
  </PageWrapper>
);

export default NotFound;
