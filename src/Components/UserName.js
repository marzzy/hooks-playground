import React, { useState , useEffect } from 'react';

export default function UserName() {
  const [validateMsg, setValidateMsg] = useState('');
  const [user, setUser] = useState(' ');

  useEffect(() => {
    if (user.includes('=')) {
      setValidateMsg('ridi ke haji ');
    }else {
      setValidateMsg('eyvaaaaaaaaal');
    }
  }, [user]);

  return (
    <div>
      <label>
        enter valid name : 
      </label>
      <input type = "text"
        onChange = {
          (e) => setUser(e.target.value)
        }
      />
      <span>
        {validateMsg}
      </span>
    </div>
  );
}