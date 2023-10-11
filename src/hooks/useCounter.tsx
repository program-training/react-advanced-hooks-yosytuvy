import { useState } from "react";

const useCounter = (initialCount:number):[number,()=>void] => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prev => prev+1);
    }

    return [count, increment];
}

export default useCounter;