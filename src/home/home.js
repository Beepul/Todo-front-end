import React, { useState } from 'react'
import Addtodo from '../component/Addtodo'
import Todo from '../component/Todo'


const Home = () => {
 const [value, setValue] = useState({})

    return (
        <>
          <Addtodo value={value} setValue={setValue} />
          <Todo setValue={setValue} />
       </>
    )
}

export default Home
