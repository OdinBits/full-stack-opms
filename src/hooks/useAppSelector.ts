import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/store';

// Custom hook to use the typed selector
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
