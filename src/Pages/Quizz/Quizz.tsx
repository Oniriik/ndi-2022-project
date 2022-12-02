import { useState } from 'react';
import './Quizz.scss';
import { Results } from './Results';
import { QuizzCard } from './QuizzCard';
import { questions } from './config';

export const Quizz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore]= useState([0,0,0,0]);
    const handleScore = (index)=>{
        const newScore = score;
        newScore[index]=score[index]+1;
        setScore(newScore);
    };
    console.log(currentQuestion);
    if(currentQuestion <=27){
        return(
            <div className='quizz'>
                {questions.length!=0 && <QuizzCard questionObject={questions[currentQuestion]}
                    questionIndex={currentQuestion}
                    handleNext={()=> setCurrentQuestion(currentQuestion+1)}
                    handleScore={handleScore}
                />}
                    
            </div>
        );
    }else{
        return <Results score={score}/>;
    }
    
};