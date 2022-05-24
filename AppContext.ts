import React from 'react';
const context = {
    songId : null,
    setSongId: (id:string)=>{},
    isPlay:false,
    setIsPlay:(is:boolean)=>{},
}

export const AppContext = React.createContext(context);