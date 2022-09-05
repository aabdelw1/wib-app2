import React, { useState } from 'react';

const AppContext = React.createContext({ data: { oneUser: null } });


const ContextProvider = (props: { children: any; }) => {
  const [user, setUser] = useState()

  return (
    <Context.Provider value={[user, setUser]}>
      {props.children}
    </Context.Provider>
  )
}

export { AppContext, ContextProvider }
