import { motion } from 'framer-motion';

import './Landing.scss';

export const Landing = () => {
    return (
        <div className="landing">
            <div className='sex-info-box'>

                <h1>InfoSexe</h1>
                <p>Cette plateforme est dédiée à la sensibilisation, la normalisation, et le partage autour de l’éducation sexuelle, et 
                      des maladies sexuellement transmissibles.</p>
                <p>
                      Vous y trouverez un quiz pour tester vos connaissances dans différents sujets liés 
                      à la sexualité, une chatroom anonyme pour aborder les sujets cités 
                      précédemment avec d’autres utilisateurs, ou avec notre 
                      intelligence artificielle (OpenIA). </p>
                <div className='credits'>
                    <p>Ce site web a été conçu dans le cadre du défi principal
                        de la nuit de l'info 2022, proposé par Sida Info Service, dans un but de sensibilisation à l'éducation sexuelle.
                    </p>
                    <a href='https://www.sida-info-service.org/'>
                        <img className='logos' src={require('./Assets/SIS.png')} alt="sislogo"/>
                    </a>
                    <img className='X' src={require('./Assets/X.png')} alt="X"/>
                    <img className='logos' src={require('./Assets/ndilogo2.png')} alt="ndi_logo"/>
                </div>
            </div>
            <a href='./Quizz'>
                <img className='quiz-bubble' src={require('./Assets/QuizOrb.png')} alt="QuizzBulle"/>
            </a>
            <img className='arrow' src={require('./Assets/down-arrow.png')} alt="Arrow"/>
            <div className='facts'>
                <motion.div 
                    className='left'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <img className='flushed' src={require('./Assets/flushed_face_3d.png')} alt="flushed"/>
                    <p>En France plus de 1 200 cas de syphilis sont déclarés au sein de relations
                            sexuelles entre deux hommes.
                    </p>
                </motion.div>
                <motion.div className='right'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: -100 }}
                    transition={{ duration: 1 }}
                >   
                    <img className='peach' src={require('./Assets/peach_3d.png')} alt="peach"/>
                    <p>Beaucoup de femmes en France ont encore des difficultés pour se procurer
                            une méthode contraceptive, dont plusieurs ne sont pas remboursées !
                    </p>
                </motion.div>
                <motion.div className='left'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <img className='cherries' src={require('./Assets/cherries_3d.png')} alt="cherries"/>
                    <p>Apprendre à jouer de la flûte c'est cool, mais apprendre qu'une IST
                            peut se soigner, c'est bien aussi.
                    </p>
                </motion.div>
                <motion.div className='right'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <img className='eggplant' src={require('./Assets/eggplant_3d.png')} alt="eggplant"/>
                    <p>Très peu d'informations sur la sexualité sont délivrées aux enfant et 
                            jeunes adultes, entre 6 et 8 heures au fil de leur scolarité.
                    </p>
                </motion.div>
                <motion.div className='left'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 100 }}
                    transition={{ duration: 1 }}
                >
                    <p>"Qui ne dit mot consent" ne s'applique pas aux relations sexuelles !</p>
                </motion.div>    
            </div>
        </div>
    );
};