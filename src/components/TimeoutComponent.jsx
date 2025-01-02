import React, { useState, useEffect } from 'react';

function TimeoutExample() {
  const [message, setMessage] = useState('Waiting for timeout...');
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    // Setting up a timeout that will update the message after 5 seconds
    const timeout = setTimeout(() => {
      if (!isCancelled) {
        setMessage('Timeout completed!');
        console.log(1);
      }
    }, 50000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout); // Cancels the timeout when the component unmounts
      console.log('Cleanup: Timeout cleared');
    };
  }, [isCancelled]); // Re-run when `isCancelled` changes

  const cancelTimeout = () => {
    setIsCancelled(true);
    console.log('Timeout has been cancelled');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={cancelTimeout}>Cancel Timeout</button>
    </div>
  );
}

export default TimeoutExample;
