import React from 'react';

const Question = (props) => {
  if (props.isEnd())
    return (<div></div>)
    return (
        <div className="question-panel">
            <h2>{props.question.title}</h2>
            <h3>{props.question.content}</h3>
        </div>
    )
};

export default Question;
