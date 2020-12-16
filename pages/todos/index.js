import React from 'react'
import TodoList from '../../components/TodoList'
import Link from 'next/link'


export async function getServerSideProps(context) {

    const r = await fetch(process.env.REACT_APP_TODO_URL)
    const todos = await r.json()
    return {
      props: {
        todosData:todos
      }, // will be passed to the page component as props
    }
  }

export default function todos({todosData}) {
    return (
        <div>
            <h1>TodoList</h1>
            <Link href="/">Home</Link>
            <TodoList todos={todosData}></TodoList>
        </div>
    )
}
