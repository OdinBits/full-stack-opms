import '../../../styles/ContentBlock/ContentBlock-style.css';
import { headerBg, logo } from '../../../constants/images';
import { Outlet } from 'react-router-dom';

const ContentBlock = () => {
    return (
        <div>
            <img src={headerBg}/>
            <img src={logo} alt='logo' className='logo-style' />

            <div className='block-window'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ContentBlock
