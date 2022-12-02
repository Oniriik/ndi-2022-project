import './Results.scss';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { data, options } from './config';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const Results = () => {
    return (
        <div className='results'>
            <div className='header'>Vos résultats à notre quiz :</div>
            <div className='chart-container'>
                <Radar
                    data={data}
                    options={options}
                ></Radar>
            </div>
            <p>Si vous voulez en apprendre plus sur certaines catégories,
                vous pouvez cliquer sur les tags ci-dessous pour vous informer :</p>
            <div className='links'>
                <a className='bubble neon'>Contraception</a>
                <a className='bubble lavender'>IST</a>
                <a className='bubble tasty'>Consentement</a>
                <a className='bubble error'>Orientation</a>
            </div>
        </div>
    );
};