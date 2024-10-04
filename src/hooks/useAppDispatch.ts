import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

// Custom hook to use the typed AppDispatch
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
