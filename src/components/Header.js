import React from 'react';



const Header = (props) => (

    <div className = 'header'> 
    <div className = 'container'>
    <h1 className = 'header_title'> {props.titles} </h1>
    <h1 className = 'header_subtitle'> {props.subTitle}</h1>
    </div>
    </div>
)


export default Header;