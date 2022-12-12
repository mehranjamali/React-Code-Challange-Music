// import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/pages";

function App() {
   return (
      <div className="w-full flex justify-center bg-gray-50 min-h-screen">
         {/* <BrowserRouter> */}
         <Pages />
         {/* </BrowserRouter> */}
      </div>
   );
}

export default App;
