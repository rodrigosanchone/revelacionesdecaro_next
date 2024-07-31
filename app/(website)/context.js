"use client"; // En algún lugar de tu aplicación (por ejemplo, en un archivo context.js)
import { createContext, useContext, useState } from "react";

const IdContext = createContext();

export function IdProvider({ children }) {
  const [articleId, setArticleId] = useState(null);

  return (
    <IdContext.Provider value={{ articleId, setArticleId }}>
      {children}
    </IdContext.Provider>
  );
}

export function useArticleId() {
  return useContext(IdContext);
}
