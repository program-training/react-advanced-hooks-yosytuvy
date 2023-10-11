import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SaveRetreiveLS = () => {

    const [test, setTest, deletTest] = useLocalStorage('key_test', '');
    const [value, setValue] = useState('');

    return (
        <>
            <h1>E2:</h1>
            <div>
                <input type="text" placeholder="this text is saved in loacal storage" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={()=>setTest(value)}>Save data</button>
                <h4>data:{test}</h4>
            </div>
        </>
    );
};

export default SaveRetreiveLS;
