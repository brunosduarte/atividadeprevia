import TextInput from "./TextInput"
export default function MultiplierFactor() {
    return (
        <div>

            <TextInput
              id="pesoCarregado"
              labelDescription="Informe o peso carregado no periodo" 
              inputValue="3000"
              autoFocus
           />

           <input className="periodo"/>Periodo

            
        </div>
    )
}

