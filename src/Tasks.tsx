import React from 'react';

export type TaskDataType = {
    taskId: number
    title: string
    isDone: boolean
}

export type DataType = {
    title: string
    tasks: Array<TaskDataType>
    students: Array<string>
}

type TasksType = {
    data: DataType
}

export const Tasks = ({data}: TasksType) => {
    return (
        <div>
            <h2>{data.title}</h2>
            <ul>
                {data.tasks.map(task => {
                    return (
                        <li key={task.taskId}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {data.students.map((student, index) => {
                    return (
                        <li key={index}>
                            {student}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};




// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };