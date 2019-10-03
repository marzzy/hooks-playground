import React, { useState, useEffect } from 'react';

export default function UserName() {
  const [validateMsg, setValidateMsg] = useState('');
  const [user, setUser] = useState(' ');

  useEffect(() => {
    if (user.includes('=')) {
      setValidateMsg('ridi ke haji ');
    } else {
      setValidateMsg('eyvaaaaaaaaal');
    }
  }, [user]);

  return (
    <div>
      <label htmlFor="firstName">
        <input
          id="firstName"
          type="text"
          onChange={
            (e) => setUser(e.target.value)
          }
        />
        enter valid name :
      </label>
      <span>
        {validateMsg}
      </span>
    </div>
  );
}
