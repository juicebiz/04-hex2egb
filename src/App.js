import React, { useState } from "react";
import './App.css';

function App() {
  
  const hex2rgb = color => {
    let hexCode = color
    let rgbArr = []
    if(/^#?[A-Fa-f0-9]{6}$/.test(hexCode)){
        hexCode = hexCode.split("#")[1] || hexCode
        for(let i=0; i<hexCode.length;i+=2){
            rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
        }
        return "rgb(" + rgbArr + ")"
    }
    else{
        return false
    }
  }

  const defaultColor = '#34495e'
  
  const [form, setForm] = useState({
    bgText: defaultColor,
    bgColor: defaultColor,
    rgbText: hex2rgb(defaultColor),
  })

  const changeInput = evt => {
    const value = evt.target.value
    if(value.length === 7) {
      const rgb = hex2rgb(value)
      let bgColor
      let rgbText

      if(rgb) {
        bgColor = value
        rgbText = rgb
      } else {
        bgColor = '#e94b35'
        rgbText = 'Ошибка!'
      }

      setForm(prevForm => ({...prevForm, bgText: value, bgColor: bgColor, rgbText: rgbText}))
    } else {
      setForm(prevForm => ({...prevForm, bgText: value, bgColor: defaultColor, rgbText: ' '}))
    }
  }

  document.body.style.backgroundColor = form.bgColor

  return (
    <div className="App">
      <header className="App-header">
          <div className="App-colorpicker-block">
            <form>
              <input id="bg-color" name="bg_color" value={form.bgText} onChange={changeInput}></input>
              <button>{form.rgbText}</button>
            </form>
          </div>   
      </header>
    </div>
  );
}

export default App;
