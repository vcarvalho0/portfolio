import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
