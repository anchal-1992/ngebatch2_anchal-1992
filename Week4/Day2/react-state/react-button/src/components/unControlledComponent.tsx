import React, { useRef } from 'react'

export default function UnControlledComponent() {
    const element = useRef<HTMLInputElement|null>(null);
    function handleClick(){
      console.log(element.current?.value)
    }
  return (
    <div>
      <input type="text" ref={element} onInput={handleClick}></input>
    </div>
  )
}
