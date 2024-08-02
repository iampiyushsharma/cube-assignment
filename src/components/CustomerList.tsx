import React from 'react';
import CustomerCard from './CustomerCard';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
  onSelect: (id: number) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelect, selectedCustomerId }) => {
  return (
    <div>
      {customers.map(customer => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onSelect={onSelect}
          isSelected={customer.id === selectedCustomerId}
        />
      ))}
    </div>
  );
};

export default CustomerList;
