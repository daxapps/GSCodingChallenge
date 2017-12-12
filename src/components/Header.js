import React, { Component } from 'react';

import BackBtn from '../prev.jpg'
import {data} from '../data/questions';

class Header extends Component {
  constructor(props){
      super(props);
      this.state = {
          currentQuestionId: 1,
          questionList: data.questionData
      }
  }

  render() {
  	const {currentQuestionId, questionList} = this.state;
	  if (this.props.isEnd())
	     return (<div></div>)

	  return (
	  	<div>
		    <button className="back-btn" onClick={this.props.handleGoBack}>
		    	<img src={BackBtn} />
		    </button>
		    <div className="question-count">
		      <span>Step {currentQuestionId} of {questionList.length}</span>
		    </div>
	    </div>
	    )
  }

};

export default Header;
