import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const AddPlayer = () => {
  const navigate = useNavigate();
  return <Form onComplete={() => navigate('/players')} />;
};

export default AddPlayer;
