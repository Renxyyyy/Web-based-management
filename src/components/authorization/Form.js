import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import NewForm from './NewForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'></span>
        {!isSubmitted ? (
          <NewForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;