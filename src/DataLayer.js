import React, { createContext, useContext,useReducer } from 'react';


export const DataLayerContext = createContext();


export const DataLayer = ({initialState,reducer,children}) =>(
    // eslint-disable-next-line no-unused-expressions
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);