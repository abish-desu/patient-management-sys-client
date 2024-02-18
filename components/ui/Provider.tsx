"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Provider = ({ children }: any) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ToastContainer />
      {children}
    </QueryClientProvider>
  );
};
export default Provider;
