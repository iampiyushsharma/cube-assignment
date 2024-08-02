import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerCardProps {
  customer: Customer;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onSelect, isSelected }) => {
  return (
    <div
      className={`p-4  cursor-pointer ${isSelected ? 'bg-slate-200 border-r border-r-black ' : 'bg-white'} rounded`}
      onClick={() => onSelect(customer.id)}
    >
      <h3 className="text-xl font-bold">{customer.name}</h3>
      <p className="text-lg">{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
