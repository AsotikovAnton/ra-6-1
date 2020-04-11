import React, { useState } from 'react';
import ClockItem from './ClockItem';
import AddClock from './AddClock';

export default function WorldClocks() {
  const [clocks, setClocks] = useState([]);

  const handleSubmit = (addClocks) => {
    setClocks((prevClocks) => ([...prevClocks, addClocks]));
  };

  const handleClose = (id) => {
    setClocks((prevClocks) => (prevClocks.filter((item) => item.id !== id)));
  };

  return (
    <>
      <AddClock onFormSubmit={handleSubmit} />
      <div className='clock-list'>
        {clocks.map((item) => (
          <ClockItem key={item.id} clocksSetup={item} onClose={handleClose} />
        ))}
      </div>
    </>
  );
}
