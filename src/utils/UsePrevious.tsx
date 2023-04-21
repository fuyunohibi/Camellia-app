import { useEffect, useRef } from 'react';

function UsePrevious(value: any) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current;
}

export default UsePrevious;