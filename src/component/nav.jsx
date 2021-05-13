import React from 'react';

const Nav = (props) => {
    // variable
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dates = date.getDate();

    const days = ['월요일','화요일','수요일','목요일','금요일','토요일','일요일' ];
    const day = days[date.getDay()-1];

    const leftCount = props.leftCount

    return(
      <div className="nav">
        <h1 className="todo-day">{year}년 {month+1}월 {dates}일</h1>
        <p className="todo-date">{day}</p>
        <p className="todo-left">할 일 {leftCount}개 남음</p> 
      </div>
    );           
};

export default Nav;