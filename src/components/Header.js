import React from 'react'
import Button from './Button';

const Header = ({title,toogleShow,showAddTASK}) => {
    
    return (
        <header className="header">{title}
        <Button renk={showAddTASK ? "red" :"purple" }
            metin={showAddTASK ? "Close"  :"Show Add Task Bar" }
             toogleShow={toogleShow} />
        </header>
        
    )
}
 
export default Header;
