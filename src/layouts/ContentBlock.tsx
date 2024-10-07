import { Outlet } from 'react-router-dom';
import { headerBg, logo } from '../constants/images';
import '../styles/ContentBlockStyle.css';
import { useAppSelector } from '../hooks';

const ContentBlock = () => {

    const pageName = useAppSelector(state => state.pageName.pageName);
    return (
        <div>
            <img src={headerBg}/>
            <h1>{pageName}</h1>
            <img src={logo} alt='logo' className='logo-style' />

            <div className='block-window'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ContentBlock
