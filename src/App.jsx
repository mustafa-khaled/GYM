import { BrowserRouter as Router } from "react-router-dom";
import Header from "./ui/header/Header";
import Footer from "./ui/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
