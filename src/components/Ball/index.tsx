import React, {useRef, useState} from "react";
import "./index.css";

const answers: string[] = ['Бесспорно', 'Предрешено', 'Никаких сомнений',
    'Определённо да', 'Можешь быть уверен в этом',
    'Мне кажется — «да»', 'Вероятнее всего', 'Хорошие перспективы',
    'Знаки говорят — «да»', 'Да', 'Пока не ясно, попробуй снова',
    'Спроси позже', 'Лучше не рассказывать', 'Сейчас нельзя предсказать',
    'Сконцентрируйся и спроси опять', 'Даже не думай', 'Мой ответ — «нет»',
    'По моим данным — «нет»', 'Перспективы не очень хорошие', 'Весьма сомнительно', 'Ты пидор']

const Ball: React.FC = () => {
    const [randomAnswer, setRandomAnswer] = useState<string>();
    const ballRef = useRef<HTMLDivElement>(null);

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            const ball = ballRef.current
            // @ts-ignore
            ball.classList.add('shake');
            setRandomAnswer('......')
        }
    }

    const getAnswer = () => {
        setRandomAnswer(answers[Math.floor(Math.random() * answers.length)])
    }

    const onAnimationEnd = () => {
        // @ts-ignore
        ballRef.current.classList.remove('shake')
        getAnswer();
    }

    return (
        <>
            <input type="text" onKeyDown={onEnter}/>
            <div ref={ballRef} className="ball" onAnimationEnd={onAnimationEnd}>
                <div className="square">
                    <span className="answer">{randomAnswer}</span>
                </div>
            </div>
        </>
    )
};

export default Ball;
