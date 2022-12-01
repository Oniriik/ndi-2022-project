import './Landing.scss';

import { SpinLogo } from 'Components';

export const Landing = ()=>{
    return(
        <div className="landing">
            <SpinLogo/>
            <p>
                React Boilerplate
            </p>
        </div>
    );
};