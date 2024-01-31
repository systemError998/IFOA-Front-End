import React, { useEffect, useState } from 'react'

export default function HookComponent() {
    
    /* let state = useState('Test') */
    const [txt, setTxt] = useState('Test')
    console.log(txt);
    const [ toggle, setToggle ] = useState()

    useEffect(() => {
      console.log('Sono useEffetct');

    }, )
    

    return (
        <>
            <div> HookComponent {state[0]}</div>
            <button onClick={state[1]}> Change </button>
        </>
    )
}