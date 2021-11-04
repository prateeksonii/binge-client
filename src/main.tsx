import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalProvider from "./providers/GlobalProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <div id='app'>
          <App />
        </div>
      </GlobalProvider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
