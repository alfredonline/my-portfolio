import "./App.css";
import Container from "@mui/material/Container";
import Projects from "./Sections/Projects";
import Main from "./Sections/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import NavbarLgScreen from "./Components/NavbarLgScreen";
import Title from "./Components/Title";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "ctaMain" },
            style: {
              backgroundColor: "#6162ff",
              color: "#fff",
              padding: "12px",
              width: "200px",
              ":hover": {
                backgroundColor: "#6162ff",
              },
            },
          },
          {
            props: { variant: "secondaryBtn" },
            style: {
              border: "1px solid #fff",
              color: "#fff",
              padding: "12px",
              width: "200px",
              ":hover": {
                backgroundColor: "#fff",
                color: "#151719",
              },
            },
          },
        ],
      },
    },

    typography: {
      title: {
        fontSize: "22px",
        fontWeight: "700",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      },
      importantText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: "28px",
      },

      subText: {
        color: "#eaebeba9",
        fontSize: "18px",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <NavbarLgScreen />
        <Main />
        <div id="Projects" name="Projects">
          <Projects />
        </div>
        <br /> <br /> <br />
        <div id="Skills" name="#Skills">
          <Skills />
        </div>
        <br /> <br /> <br />
        <div id="About" name="About">
          <About />
          <a name="About"></a>
        </div>
        <br /> <br /> <br />
        <div id="Contact" name="Contact">
          <Contact />
        </div>
        <br /> <br /> <br />
      </Container>
    </ThemeProvider>
  );
}

export default App;
