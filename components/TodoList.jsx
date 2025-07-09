import React from 'react'
import TodoCard from './TodoCard.jsx';
export default function TodoList(props) {
   const { todos} = props;

    return (
    <ul className='main'>
      
       { todos.map((todo, index) => 
        <TodoCard {...props} key={index} index={index}>
            <p>{todo}</p>
        </TodoCard>
       
       ) }
    </ul>
  );
}
