import React, { createContext, useContext, useReducer } from 'react';

import { counterReducer, initialState } from './reducers/reducer';

export const AuthState = createContext();
export const AuthDispatch = createContext();

export function useAuthState() {
  return useContext(AuthState);
}

export function useAuthDispatch() {
  return useContext(AuthDispatch);
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthState.Provider>
  );
};
