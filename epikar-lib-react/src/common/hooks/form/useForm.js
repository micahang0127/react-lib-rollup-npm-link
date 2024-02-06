import { useState, useCallback } from 'react';

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const [errMsg, setErrMsg] = useState('');

  const onChange = useCallback((value) => {
    if (value.target) setValue(value.target.value);
    else setValue(value);
  }, []);

  const onChangeValue = useCallback((value) => {
    setValue(value);
  }, []);

  const onChangeErrMsg = useCallback((msg) => {
    setErrMsg(msg);
  }, []);

  return [value, onChange, onChangeValue, errMsg, onChangeErrMsg];
};
