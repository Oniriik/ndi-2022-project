import { useEffect, useState } from 'react';
import './QuizzCard.scss';

export const QuizzCard = ({ questionObject, questionIndex,handleNext, handleScore }) => {
    const { question, category, answers, caption, link ,answerIndex } = questionObject;

    const [asAnswered, setAnswered]= useState(false);

    const giveAnswer = (index)=>{
        if(index == answerIndex){
            const cat = {
                'Orientation':0,
                'Contraception':1,
                'IST':2,
                'Consentement':3,
            };
            handleScore(cat[category]);
        }else{
            console.log('wrong');
        }
        setAnswered(true);
        handleScore;
    };
    useEffect(()=>{
        setAnswered(false);
    },[question]);
    return(
        <div className="quizzcard-container">
            <div className="header">
                <span className="question">{question}</span>
                <div className='category'>{category}</div>
            </div>
            <div className='question-body'>
                <div className='answers-container'>
                    {answers.map(
                        (g, index) => {
                            return(<div key={index}
                                className={`answer ${asAnswered ? index == answerIndex? 'valid':'wrong': ''}`}
                                onClick={()=>giveAnswer(index)}>
                                {g}
                            </div>);
                        }
                    )}
                </div>
                <div className='caption-container'>
                    {asAnswered&&
                    <>
                        <div className="caption">{caption}</div>
                        <a href={link}>En savoir plus.</a>
                    </>}
                    
                </div>
            </div>
            <div className="question-bottom">
                <div className='index'>Question {questionIndex}/16.</div>
                <button onClick={handleNext}>Question Suivante</button>
            </div>
        </div>
    );
};