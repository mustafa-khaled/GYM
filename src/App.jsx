import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./ui/header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>

      {/* Toast library settings */}
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "50px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#eee",
            color: "var(--primary-color)",
          },
        }}
      />
    </>
  );
}

export default App;
