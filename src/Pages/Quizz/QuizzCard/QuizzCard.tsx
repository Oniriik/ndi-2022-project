import './QuizzCard.scss';

export const QuizzCard = ({ questionObject, questionIndex }) => {
    const { question, category, answers, caption, link } = questionObject;
    return(
        <div className="quizzcard-container">
            <div className="header">
                <span className="question">{question}</span>
                <div className='category'>{category}</div>
            </div>
            <div className='question-body'>
                <div className='answers-container'>
                    {answers.map(
                        (g) => {
                            return(<div className='answer'>{g}</div>);
                        }
                    )}
                </div>
                <div className='caption-container'>
                    <div className="caption">{caption}</div>
                    <a href={link}>En savoir plus.</a>
                </div>
            </div>
            <div className="question-bottom">
                <div className='index'>Question {questionIndex}/16.</div>
                <button>Question Suivante</button>
            </div>
        </div>
    );
};