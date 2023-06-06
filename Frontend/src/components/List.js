import React from 'react'
import axios from 'axios';
import { BsTrash } from "react-icons/bs"
import { BiEditAlt } from "react-icons/bi"
import { baseURL } from '../utils/constant'
const List = ({ id, task, setUpdateUI, updateMode, }) => {
  const removeTask = (id) => {
    console.log("Removing task Id : ", id)
    axios.delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res);
        setUpdateUI((prevState) => !prevState);
      })
  }
  return (
    <li>
      {task}
      <div className='icon_holder'>
        <div className='divicon1'><BiEditAlt className='icon1 icon' onClick={() => { updateMode(id, task) }} /></div>
        <div className='divicon2'><BsTrash className='icon2 icon' onClick={() => removeTask(id)} /></div>
      </div>
    </li>
  )
}

export default List;
