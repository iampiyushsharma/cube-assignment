import React from 'react';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: {
    name: string;
    title: string;
    address: string;
    photos: string[];
  } | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="p-4">Select a customer to see the details</div>;
  }

  return (
    <div className="mt-4 text-xl justify-center items-center text-center ">
      <h2 className="font-bold pt-10 pb-6 mb-2 text-2xl">{customer.name}</h2>
      <h3 className="text-xl pl-20 pr-20">{customer.title}</h3>
      <p className="mb-4 mt-4">{customer.address}</p>
      <div className='pl-32 pr-32'>
      <PhotoGrid  customer={customer}/>
      </div>
      
    </div>
  );
};

export default CustomerDetails;
