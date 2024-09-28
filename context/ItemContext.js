"use client";

import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

function ItemProvider({ children }) {
  // baraye inke betoonim item select shode ro peyda konim va dar aval
  // array bzarim in context doros shod.
  const [selectedId, setSelectedId] = useState(null);

  function handleChangeSelectedId(id) {
    setSelectedId(id);
  }

  return (
    <ItemContext.Provider value={{ selectedId, handleChangeSelectedId }}>
      {children}
    </ItemContext.Provider>
  );
}

function useItem() {
  const context = useContext(ItemContext);
  if (context === undefined)
    throw new Error("Context was used outside Provider");
  return context;
}

export { ItemProvider, useItem };
