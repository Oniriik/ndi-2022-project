import './NavBar.scss';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='header'>
                <div className='head-row'>
                    <div className='row-item'>
                        <a>Accueil</a>
                    </div>
                    <div className='row-item'>
                        <a>Quiz</a>
                    </div>
                    <div className='row-item'>
                        <a>Chatroom</a>
                    </div>
                </div>
            </div>
        </div>
    );
};