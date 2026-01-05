import React from 'react';
import Button from '../../../../components/form/Button';

const InfoCard = ({ title, data, onEdit, isLast = false }) => {
  const cardClass = isLast ? 'card-last' : 'card-section';

  return (
    <div className={cardClass}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="info-grid">
        {data.map((item, index) => (
          <div key={index} className={item.fullWidth ? 'md:col-span-2' : ''}>
            <p className="info-label">{item.label}</p>
            <p className="info-value">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 flex justify-end">
        <Button 
          variant="secondary" 
          onClick={onEdit}
          className="btn-secondary-sm"
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;