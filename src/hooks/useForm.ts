import { useState } from "react";

export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = ({target}:any) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleInputChange, reset ];
}