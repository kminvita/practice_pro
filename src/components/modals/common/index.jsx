import React from 'react';
import './commonModal.css';

function CommonModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="commonModalWrapper">
      <aside />
    </div>
  );
}

export default CommonModal;
