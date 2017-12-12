import React from 'react';
import BackBtn from '../prev.jpg'

const Header = (props) => {
    if (props.isEnd())
      return (<div></div>)
    return (
    <button className="back-btn" onClick={props.handleGoBack}>
    	<img src={BackBtn} />
    </button>
    )
};

export default Header;
