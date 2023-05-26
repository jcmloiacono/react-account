import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./globalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);
  const togleTema = () =>{
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaOscuro: temaClaro }>
      <GlobalStyle />
      <BtnTema onClick={togleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
