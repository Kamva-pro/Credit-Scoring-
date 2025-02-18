import React, { useState } from 'react';
import { submitBusiness } from './api';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    business_type: '',
    monthly_revenue: '',
    payment_method: '',
    business_age: '',
    missed_payments: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitBusiness(formData);
      console.log('Credit Score:', response.data.credit_score);
    } catch (error) {
      console.error('Error submitting business data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BusinessForm;
