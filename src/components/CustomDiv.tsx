import useCounter from "../hooks/useCounter";

const CustomDiv = () => {
    const [enterCount, IncrementEnterCount] = useCounter(0);

    return (
        <>
            <div
            onMouseEnter={IncrementEnterCount}
            style={{width:"200px", height:"200px", backgroundColor:"brown"}}
            >
                <p
                style={{textAlign:"center"}}
                >you enter this div: {enterCount}</p>

            </div>
        </>
    );
};

export default CustomDiv;
