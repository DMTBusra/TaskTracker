import React from 'react'

const Button = ({toogleShow,metin,renk}) => {
    // const handleClick = () =>{
    //     console.log("click");
    // }
    return (
        <div>
            <button className="btn" style={{backgroundColor:renk}} onClick={toogleShow}>{metin}</button>
        </div>
    )
}

export default Button;
