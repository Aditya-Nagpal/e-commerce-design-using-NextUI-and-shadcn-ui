'use client'
import React,{useEffect} from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

export default function CategoryListItem({name,icon,index,size}: any) {
  useEffect(() => {
    if(index == size-1 || index == 0){
      document.getElementById(`cat_${index}`)?.classList.add('border-b-0');
      document.getElementById(`cat_${index}`)?.classList.remove('border-b-2');
    }
  },[])
  return (
    <li id={"cat_"+index.toString()} className='flex justify-between h-12 px-3 border-b-2 border-gray-200'>
        <div className='flex items-center'>
            {icon}
            <span className='capitalize text-sm font-medium leading-4'>{name}</span>
        </div>
        <div className='flex items-center'>
            {
                name == "all categories" ? <MdKeyboardArrowDown className='text-gray-400 text-2xl' /> : <MdKeyboardArrowRight className='text-gray-400 text-2xl' />
            }
        </div>
    </li>
  )
}
