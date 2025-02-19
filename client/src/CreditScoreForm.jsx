import React, { useState } from 'react';
import axios from 'axios';

const CreditScoreForm = () => {
  const [formData, setFormData] = useState({
    business_type: '',
    monthly_revenue: '',
    payment_method: '',
    business_age: '',
    missed_payments: false,
  });

  const [creditScore, setCreditScore] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCreditScore(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/submit/', formData);
      setCreditScore(response.data.credit_score);
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Business Credit Score Calculator</h2>
      <form onSubmit={handleSubmit} className="credit-score-form">
        <div className="form-group">
          <label>Business Type</label>
          <select
            name="business_type"
            value={formData.business_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="spaza">Spaza Shop</option>
            <option value="freelancer">Freelancer</option>
            <option value="delivery">Delivery Service</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Monthly Revenue</label>
          <input
            type="number"
            name="monthly_revenue"
            value={formData.monthly_revenue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
            required
          >
            <option value="">Select Method</option>
            <option value="mobile_money">Mobile Money</option>
            <option value="bank">Bank Deposits</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        <div className="form-group">
          <label>Business Age (in years)</label>
          <input
            type="number"
            name="business_age"
            value={formData.business_age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="missed_payments"
              checked={formData.missed_payments}
              onChange={handleChange}
            />
            Missed Payments
          </label>
        </div>

        <button type="submit">Calculate Credit Score</button>
      </form>

      {error && <p className="error">{error}</p>}
      {creditScore !== null && (
        <div className="result">
          <h3>Your Business Credit Score: {creditScore}</h3>
        </div>
      )}
    </div>
  );
};

export default CreditScoreForm;
