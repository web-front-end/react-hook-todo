import { useState } from "react";

export default useInputState => {
    const [value, setValue] = useState('');
    return{
        value,
        reset: () =>{
            setValue('');
        },
        onChange: (e) =>{
            setValue(e.target.value);
        }
    }
}