import React from 'react'
import { useRouter } from 'next/router'

export async function getStaticPaths() {

    const r = await fetch(process.env.REACT_APP_TODO_URL)
    const todos = await r.json()
    
    const paths = todos.map((todo) => ({
        params: { id: `${todo.id}` },
    }))
    return { paths, fallback: false }

  }

  export async function getStaticProps({params}) {

    const url = `${process.env.REACT_APP_TODO_URL}/${params.id}`
    const r = await fetch(url)
    const todo = await r.json()
    return {
      props: {
        todoData:todo
      }, // will be passed to the page component as props
    }
  }

export default function Todo({todoData}) {

    // const router = useRouter()
    // const { id } = router.query
  

    return (
        <div>
                Todo : {todoData.title}
        </div>
    )
}
