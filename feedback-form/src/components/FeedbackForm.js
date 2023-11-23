import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../FeedbackForm.css';

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!firstName || !lastName || !email) {
      setSuccessMessage('Ad, Soyad və E-mail sahələri mütləqdir.');
      return;
    }

    // Perform submission logic here
    setSuccessMessage('Müraciətiniz müvəffəqiyyətlə göndərildi!');
  };

  return (
    <div className="form-container">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ad:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Soyad:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Telefon:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Şərh:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit">Göndər</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};



export default FeedbackForm;