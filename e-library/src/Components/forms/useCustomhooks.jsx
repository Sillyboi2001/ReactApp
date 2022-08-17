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
  const onChangeFiles = (e) => {
    setValue({ ...value, fileUrl: e.target.files[0] });
  };
  return [value, onChange, onChangeFiles];
};
export default useCustomHooks;
