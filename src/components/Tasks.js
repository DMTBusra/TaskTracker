import React from 'react'
import Task from './Task';

const Tasks = ({görevler,sil,toogleDone}) => {
 
    return (
        <div>
            {görevler.map((görev)=>(
                <Task key={görev.id} mission={görev} sil={sil}  toogleDone={toogleDone}/>
             ) )}
        </div>
    );
};

export default Tasks

