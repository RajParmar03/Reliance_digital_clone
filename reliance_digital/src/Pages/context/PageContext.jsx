import React, { createContext, useState } from 'react'

export const PageContext=createContext()

export const PageContextProvider=( {children} )=>{
    return(
        <PageContext.Provider value={"sumit"}>
            {children}
        </PageContext.Provider>
    )
}