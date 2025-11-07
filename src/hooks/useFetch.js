import { useReducer, useEffect } from 'react';

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'DATA':
            return { ...state, data: payload };
        case 'LOADING':
            return { ...state, isLoading: payload };
        case 'ERROR':
            return { ...state, error: payload };
        default:
            return state;
    }
}

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'LOADING', payload: true });
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP xatolik: ${response.status}`);
                }
                const data = await response.json();
                dispatch({ type: 'DATA', payload: data.products });
            } catch (err) {
                dispatch({ type: 'ERROR', payload: err.message || "Xatolik yuz berdi" });
            } finally {
                dispatch({ type: 'LOADING', payload: false });
            }
        };

        fetchData();
    }, [url]);

    return state;
};