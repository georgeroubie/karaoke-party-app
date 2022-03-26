import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import PageWrapper from '../components/PageWrapper';

const AddPlayer = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Add a new player">
      <Form onComplete={() => navigate('/players')} />
    </PageWrapper>
  );
};

export default AddPlayer;
