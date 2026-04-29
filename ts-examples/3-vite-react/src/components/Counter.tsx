import { useState } from 'react'
import style from './Counter.module.css'

export function Counter({startWith = 0}) {
    const [count, setCount] = useState(startWith)

    return (
        <button
            className={style.buttonStyle}
            onClick={() => setCount(c => c + 1)}>
            Count me up {count}
        </button>
    )
}
