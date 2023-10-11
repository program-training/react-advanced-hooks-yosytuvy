import useCounter from "../hooks/useCounter";

const Buttons = () => {
    const [greenClicks, incrementGreen] = useCounter(0);

    const [blueClicks, incrementBlue] = useCounter(0);

    return (
        <>
            <h1>E1:</h1>
            <div>
                <button
                    onClick={() => incrementGreen()}
                    style={{ backgroundColor: "green" }}>
                    press
                </button>
                <button
                    onClick={() => incrementBlue()}
                    style={{ backgroundColor: "blue" }}>
                    press
                </button>
            </div>
            <div>
                <p>green button clicks: {greenClicks}</p>
                <p>blue button clicks: {blueClicks}</p>
            </div>
        </>
    );
};

export default Buttons;
