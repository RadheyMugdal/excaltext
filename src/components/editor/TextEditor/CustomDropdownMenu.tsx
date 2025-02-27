import clsx from 'clsx'
import React, { createContext, useContext, useEffect, useRef } from 'react'

interface CustomDropdownMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext=createContext<CustomDropdownMenuProps | null>(null)


const CustomDropdownMenu = ({children}:{children:React.ReactNode}) => {
    const [open,setOpen]=React.useState(false)
    const dropDownRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        function handleClickOutside(event:MouseEvent){
            if(dropDownRef.current &&  !dropDownRef.current.contains(event.target as Node)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    },[])
  return (
    <DropdownContext.Provider value={{open,setOpen}}>
        <div className=' relative inline-block' ref={dropDownRef} >
            {children}
        </div>
    </DropdownContext.Provider>
  )
}

export default CustomDropdownMenu


export const CustomDropdownTrigger = ({ children, }:{children:React.ReactNode}) => {
    const context =useContext(DropdownContext)
    if(!context) throw new Error("CustomDropdownMenu must be used within a CustomDropdownMenuProvider")
  return (
    <button onClick={()=>context.setOpen((prev)=>!prev)} className='p-1 hover:bg-foreground/10 rounded-md' >
      {children}
    </button>
  )
}
export const CustomDropdownContent = ({children,className}:{children:React.ReactNode,className?:string}) => {
    const context =useContext(DropdownContext)
    if(!context) throw new Error("CustomDropdownMenu must be used within a CustomDropdownMenuProvider")
    return (
      <div className={clsx('absolute -left-1/2 bottom-[calc(100%+0.25rem)] h-fit bg-background border  rounded-md p-1 opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out ',
        className,
        {" opacity-100  pointer-events-auto":context.open}
      )}>
        {children}
      </div>
    )   
}

export const CustomDropDownMenuItem = ({children,className,onClick}:{children:React.ReactNode,className?:string,onClick?:()=>void}) => {
    const context =useContext(DropdownContext)
    if(!context) throw new Error("CustomDropdownMenu must be used within a CustomDropdownMenuProvider")
  return (
    <button className={clsx(' text-sm cursor-pointer min-w-max p-2 w-full hover:bg-secondary rounded-md  items-center inline-flex text-start',className)} onClick={()=>{
        if (onClick) onClick()
        context.setOpen(false)
    }} >
      {children}
    </button>
  )
}