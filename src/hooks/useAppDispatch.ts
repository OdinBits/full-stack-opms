import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

// Custom hook to use the typed AppDispatch
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
