import { useNavigate } from 'react-router-dom';

const useBookId = () => {
  const redirect = useNavigate();

  const BookDetails = (id) => {
    redirect(`/borrowBook/${id}`);
  };
  const ImageDetails = (id) => {
    redirect(`/addImage/${id}`);
  };
  return { BookDetails, ImageDetails };
};

export default useBookId;
