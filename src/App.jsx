import React, { useState } from "react";
import "./App.css";
import { MyRoutes } from "./routes/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext("");

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarState, setSidebarState] = useState(true);
  const themeStyle = theme === "light" ? Light : Dark;

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarState ? "active" : ""}>
              <Sidebar
                sidebarState={sidebarState}
                setSidebarState={setSidebarState}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition: all .3s;
  &.active {
    grid-template-columns: 300px auto;
  }
`;

export default App;
