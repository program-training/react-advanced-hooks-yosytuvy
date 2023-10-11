import useLocalStorage from "../hooks/useLocalStorage";

const DeleteLS = () => {
    const [test, setTest, deletTest] = useLocalStorage('key_test', '');


    return (
        <>
            <div>
                <button onClick={deletTest}>Delete</button>
            </div>
        </>
    );
};

export default DeleteLS;
