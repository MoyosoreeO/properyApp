import "./App.css";
import MainHeader from "./Components/Header/MainHeader";
import Navigation from "./Components/Menu/Navigation";
import Introduction from "./Components/AboutUs/Introduction";
import SearchPage from "./Components/Search/SearchPage";
import UtilityContext from "./Store/Context/UtilityContext";
import Profile from "./Components/CreateProfile/Profile";
import { useContext } from "react";
import { PropertyContextProvider } from "./Store/Context/PropertyContex";
import { UserContextProvider } from "./Store/Context/User";
import UploadProperty from "./Components/UploadProp/UploadProperty";
import TopAgents from "./Components/TopAgents/TopAgents";
// document.addEventListener(
//   "touchmove",
//   (event) => event.scale !== 1 && event.preventDefault(),
//   { passive: false }
// );
function App() {
  const utilityCtx = useContext(UtilityContext);
  return (
    <>
      <MainHeader />
      <main>
        <UserContextProvider>
          {utilityCtx.screenWidth > 768 && <Navigation />}
          {utilityCtx.menuIsOpen && <Navigation />}
          {utilityCtx.section.aboutIsopen && <Introduction />}
          <PropertyContextProvider>
            {utilityCtx.section.searchIsopen && <SearchPage />}
            {utilityCtx.section.uploadProfile && <UploadProperty />}
            {utilityCtx.section.topAgents && <TopAgents />}
          </PropertyContextProvider>
          {utilityCtx.section.createProfile && <Profile />}
        </UserContextProvider>
      </main>
    </>
  );
}

export default App;
