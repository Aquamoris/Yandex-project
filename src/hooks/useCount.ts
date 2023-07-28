import {useCallback, useState} from "react";

export function useCount(initialValue: number) {
    let [count, setCount] = useState(initialValue);

    const decrement = useCallback( () => {
        setCount((currentCount) => currentCount--)
    }, []);
    const increment = useCallback( () => {
        setCount((currentCount) => currentCount++)
    }, []);

    return { count, decrement, increment };
}