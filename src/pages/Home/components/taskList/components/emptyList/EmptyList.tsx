import React from 'react';
import './EmptyList.css';

function EmptyList() {
  return (
    <div className='empty-list secondary-text' style={{ fontWeight: '400' }}>
        <span className='text-center'>You have nothing to do.</span>
        <span className='text-center'>Go get some sleep.</span>
    </div>
  );
}

export default EmptyList;
