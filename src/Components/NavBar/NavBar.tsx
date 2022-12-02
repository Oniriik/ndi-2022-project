import './NavBar.scss';
import { useNavigate } from 'react-router-dom';
import { items } from './config';

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='header'>
                <div className='head-row'>
                    {items.map(({ text, path }) => (
                        <div className='row-item' onClick={()=>navigate(path)}>
                            <a>{text}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};