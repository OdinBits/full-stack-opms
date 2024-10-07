import { Outlet } from 'react-router-dom';
import { headerBg, logo } from '../constants/images';
import '../styles/ContentBlockStyle.css';
import { useAppSelector } from '../hooks';

const ContentBlock = () => {

    const pageName = useAppSelector(state => state.pageName.pageName);
    return (
        <div className='relavtive'>
            <img src={headerBg} className='border-2 border-blue-950'/>
            <h1 className='absolute top-14 ml-9'>{pageName}</h1>
            <img src={logo} alt='logo' className='logo-style' />

            <div className='block-window'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ContentBlock
