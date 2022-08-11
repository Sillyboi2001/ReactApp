import { useState } from 'react';

const useCustomHooks = () => {
  const [value, setValue] = useState({
    title: '',
    price: '',
    author: '',
    description: '',
    fileUrl: '',
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return [value, setValue, onChange];
};
export default useCustomHooks;
