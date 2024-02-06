import React, { useState, useEffect } from 'react';

const ButtonOffCp = ({ type, label, onClick }) => {
  const [typeByClass, setTypeByClass] = useState('');

  useEffect(() => {
    if (type === 'navy') setTypeByClass('main_btn');
    else if (type === 'gray') setTypeByClass('sub_btn1');
  }, [type]);

  return (
    <button className={`${typeByClass} btn`} onClick={onClick}>
      {label}
    </button>
  );
};

ButtonOffCp.defaultProps = {
  type: 'navy',
  label: '',
  onClick: () => {},
};
export default ButtonOffCp;
