import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import { Navbar } from "./shared/components/Navbar";
import { AuthenticationContext } from "./shared/state/context";
function App() {
  // const [authState, setAuthState] = useState({
  //   id: 0,
  // });

  // const onLoginSuccess = (data) => {
  //   setAuthState(data);
  // };
  //authState={authState} bunu navbara yazarsak o zman çalışır ama en ilkel yöntemlerden birsii bu
  return (
    <AuthenticationContext>
      <Navbar />

      <div className="container mt-3">
        {/* <Login onLoginSuccess={onLoginSuccess} /> */}
        <Outlet />
        <LanguageSelector />
      </div>
    </AuthenticationContext>
  );
}

export default App;
