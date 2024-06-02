import React from 'react';
import './style2.css';
import { Link } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';

const Services = () => {
  const services = [
    {
      id: 'therapy',
      name: 'Терапия',
      description: 'Описание услуги терапия. Здесь будет подробная информация о том, что включает в себя терапия и как она проводится.',
      doctor: 'Доктор Иванов Иван Иванович',
    },
    {
      id: 'lor',
      name: 'ЛОР',
      description: 'Описание услуги ЛОР. Здесь будет подробная информация о том, что включает в себя ЛОР и как она проводится.',
      doctor: 'Доктор Петров Петр Петрович',
    },
    {
      id: 'neurology',
      name: 'Неврология',
      description: 'Описание услуги неврология. Здесь будет подробная информация о том, что включает в себя неврология и как она проводится.',
      doctor: 'Доктор Сидоров Сидор Сидорович',
    },
    { id: 'cardiology', name: 'Кардиология' },
    { id: 'dentistry', name: 'Стоматология' },
    { id: 'pediatrics', name: 'Врач педиатр' },
    { id: 'child-lor', name: 'Детский ЛОР' },
    { id: 'child-psychology', name: 'Детский психолог' },
    { id: 'child-neuropathology', name: 'Детский невропатолог' },
    { id: 'child-ultrasound', name: 'Узи детям' },
    { id: 'clinical-analysis', name: 'Общеклинические анализы' },
    { id: 'blood-analysis', name: 'Биохимическиё анализ крови' },
    { id: 'immunoassay', name: 'Иммуноферментный анализ' },
    { id: 'serological', name: 'Серологическая диагностика' },
    { id: 'gastroscopy', name: 'Гастроскопия' },
    { id: 'surgery', name: 'Хирургические операции' },
    { id: 'lor-surgery', name: 'ЛОР-операции' },
    { id: 'maxillofacial-surgery', name: 'Челюстно-лицевая хирургия' },
    { id: 'vascular-surgery', name: 'Сосудистая хирургия' },
    { id: 'anesthesiology', name: 'Анестезиология' },
  ];

  return (
    <div>
      <h1>Наши Услуги</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

