import Header from "./Header";
import Footer from "./Footer";
// import ButtonCount from "./ButtonCount.jsx";
import Main from "./Main";
import TextInput from "./TextInput";
import { Button } from '@material-ui/core';


export default function App() {
  
  console.log('Teste no console do navegador');
  let valueShowed = 10;


  function handleClickPlus() {
    console.log("+");
    console.log(valueShowed);
    valueShowed++;

  }
  function handleClickMinus() {
    console.log("-");
    console.log(valueShowed);
    valueShowed--;
  }
  function handleClickZero() {
      console.log("0");
      console.log(valueShowed);
      valueShowed = 0;      
  }
  function valueChanged() {
    return valueShowed;      
}  
  return (
    <>

 
    <div>
      <Header>
        Atividade Prévia
      </Header>
    </div>
    <div>


      <Main>
        <div className="flex justify-center">

          <TextInput inputValue={valueChanged} onChange={valueChanged} labelDescription="Contador:" readOnly>
          </TextInput>

        </div>

        <div className="flex justify-center space-x-10">
            <Button color="primary" variant="contained" onClick={handleClickPlus}>+</Button>
            <Button color="secondary" variant="contained" onClick={handleClickMinus}>-</Button>
            <Button variant="contained" onClick={handleClickZero}>Zerar</Button>
        </div>
      </Main>
    </div>

    <div>
      <Footer>
        Desenvolvido por Bruno Duarte ® 2021
      </Footer>
    </div>

    

    </>
  );
}
