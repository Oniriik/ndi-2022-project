import './Landing.scss';

export const Landing = () => {
    return (
        <div className="landing">
            <div className='sex-info-box'>
                <h1>SexeInfo</h1>
                <p>Cette plateforme est dédiée à la sensibilisation, la normalisation, et le partage autour de l’éducation sexuelle, et 
                      des maladies sexuellement transmissibles.</p>
                <p>
                      Vous y trouverez un quiz pour tester vos connaissances dans différents sujets liés 
                      à la sexualité, une chatroom anonyme pour aborder les sujets cités 
                      précédemment avec d’autres utilisateurs, ou avec notre 
                      intelligence artificielle (OpenIA). </p>
            </div>
            <img className='quiz-bubble' src={require('./Assets/QuizOrb.png')} alt="QuizzBulle"/>
        </div>
    );
};