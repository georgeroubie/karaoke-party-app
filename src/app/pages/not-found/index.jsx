import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import Description from '../../components/typography/Description';

const NotFound = () => {
  return (
    <PageWrapper title="Oops :(">
      <Description>The page you are looking for does not exist!</Description>
      <Description>
        Click <Link to="/">here</Link> to go to home page.
      </Description>
    </PageWrapper>
  );
};

export default NotFound;
