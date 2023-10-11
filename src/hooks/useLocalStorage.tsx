import { useEffect, useState } from "react";

function useLocalStorage<T = string>(
    key: string,
    initialValue: T
): [T | undefined, (value: T) => void, () => void] {
    const [storedValue, setStoredValue] = useState<T>();

    useEffect(() => {
        try {
            const value = window.localStorage.getItem(key);
            if (value) {
                setStoredValue(JSON.parse(value) as T);
            } else {
                setStoredValue(initialValue);
            }
        } catch (err) {
            setStoredValue(initialValue);
        }
    }, []);

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteValue = () => {
        try {
            setStoredValue(initialValue);
            window.localStorage.removeItem(key);
        } catch (err) {
            console.log(err);
        }
    };

    return [storedValue, setValue, deleteValue];
}

export default useLocalStorage;
