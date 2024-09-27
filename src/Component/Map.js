import React from 'react'
const students=[
    {id:1,name:'john',score:85},
    {id:2,name:'jayson',score:92},
    {id:3,name:'lolitta',score:78}
];
function Map(){
    return(
        <ul>
            {students.map(students=>(
                <li key={students.id}>
                    {students.name}-Score:{students.score}
                </li>
            ))}
        </ul>
    )
}
export default Map;