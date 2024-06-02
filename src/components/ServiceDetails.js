// src/pages/ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Детали услуги</h1>
      <p>Информация об услуге: {serviceId}</p>
    </div>
  );
}

export default ServiceDetails;
