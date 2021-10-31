import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
