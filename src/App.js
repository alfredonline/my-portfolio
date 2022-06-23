import "./App.css";
import Container from "@mui/material/Container";
import Projects from "./Sections/Projects";
import Main from "./Sections/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Skills from "./Sections/Skills";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

function App() {
  const navItems = ["Projects", "Skills", "About", "Contact"];

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
      <Container maxWidth="lg" sx={{position: "relative"}}>
        <div className="NavigationBar">
          <Typography variant="title">AlfieOnline.</Typography>
          <div className="navItems">
            {navItems.map((item) => {
              return (
                <a
                  href={`#${item}`}
                  name={item}
                  className="removeLinkWhiteText"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
