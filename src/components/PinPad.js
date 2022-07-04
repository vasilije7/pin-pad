import React, { useState } from "react";

const correctPin = "1234"; 
function PinPad() {

  const [pin, setPin] = useState(""); 
  const [type, setType] = useState("password")
  const [tries, setTries] = useState(0);
  const [disabled, setDisabled] = useState()
 
  const handleChange = (event) => {
    setPin(event.target.value);
  };



const clear = () => {
  setPin("")
  setType("password")
}
  
const enter = () => {

  if(pin === correctPin){
   setType("text")
   setPin("OK")
   setTries(0)
  } else if(pin !== correctPin && pin.length === 4){
    setType("text")
   setPin("ERROR")
   setTries((tries) => tries + 1)
  }
  
   if(tries === 2){
    setType("text")
     setPin("LOCKED")
    setDisabled(true)
     setTimeout((disabled) => {
  setDisabled(false)
}, 30000);


} 
 if(pin === ""){
  setType("text")
  setPin("Please enter a pin code and then click on Enter")
} else if( pin.length < correctPin.length || pin.length > correctPin.length  ){
  setType("text")
    setPin("Pin should contain four numbers")
  }  
  
if(pin==="Please enter a pin code and then click on Enter"){
  setPin("Please enter a pin code and then click on Enter")
}
}

 if (pin === "LOCKED" && disabled === false){
 setTries(0)
 setPin((pin) => setPin(""))
 setType((type) => setType("password"))
}


if(pin === "Pin should contain four numbers1"){
  setType("password")
   setPin("1")
} else if(pin === "Pin should contain four numbers2"){
  setType("password")
  setPin("2")
} else if(pin === "Pin should contain four numbers3"){
  setType("password")
  setPin("3")
} else if(pin === "Pin should contain four numbers4"){
  setType("password")
  setPin("4")
} else if(pin === "Pin should contain four numbers5"){
  setType("password")
   setPin("5")
} else if(pin === "Pin should contain four numbers6"){
  setType("password")
   setPin("6")
}  else if(pin === "Pin should contain four numbers7"){
  setType("password")
  setPin("7")
} else if(pin === "Pin should contain four numbers8"){
  setType("password")
  setPin("8")
} else if(pin === "Pin should contain four numbers9"){
  setType("password")
  setPin("9")
} 
else if(pin === "Pin should contain four numbers0"){
   setType("password")
  setPin("0")
 
} 

if(pin === "OK1"){
  setType("password")
   setPin("1")
} else if(pin === "OK2"){
  setType("password")
  setPin("2")
} else if(pin === "OK3"){
  setType("password")
  setPin("3")
} else if(pin === "OK4"){
  setType("password")
  setPin("4")
} else if(pin === "OK5"){
  setType("password")
   setPin("5")
} else if(pin === "OK6"){
  setType("password")
   setPin("6")
}  else if(pin === "OK7"){
  setType("password")
  setPin("7")
} else if(pin === "OK8"){
  setType("password")
  setPin("8")
} else if(pin === "OK9"){
  setType("password")
  setPin("9")
} 
else if(pin === "OK0"){
   setType("password")
  setPin("0")
 
} 
if(pin === "ERROR1"){
  setType("password")
   setPin("1")
} else if(pin === "ERROR2"){
  setType("password")
  setPin("2")
} else if(pin === "ERROR3"){
  setType("password")
  setPin("3")
} else if(pin === "ERROR4"){
  setType("password")
  setPin("4")
} else if(pin === "ERROR5"){
  setType("password")
   setPin("5")
} else if(pin === "ERROR6"){
  setType("password")
   setPin("6")
}  else if(pin === "ERROR7"){
  setType("password")
  setPin("7")
} else if(pin === "ERROR8"){
  setType("password")
  setPin("8")
} else if(pin === "ERROR9"){
  setType("password")
  setPin("9")
} 
else if(pin === "ERROR0"){
   setType("password")
  setPin("0")
 
} 

if(pin === "LOCKED1"){
  setType("password")
   setPin("1")
} else if(pin === "LOCKED2"){
  setType("password")
  setPin("2")
} else if(pin === "LOCKED3"){
  setType("password")
  setPin("3")
} else if(pin === "LOCKED4"){
  setType("password")
  setPin("4")
} else if(pin === "LOCKED5"){
  setType("password")
   setPin("5")
} else if(pin === "LOCKED6"){
  setType("password")
   setPin("6")
}  else if(pin === "LOCKED7"){
  setType("password")
  setPin("7")
} else if(pin === "LOCKED8"){
  setType("password")
  setPin("8")
} else if(pin === "LOCKED9"){
  setType("password")
  setPin("9")
} 
else if(pin === "LOCKED0"){
   setType("password")
  setPin("0")
 
} 
if(pin === "Please enter a pin code and then click on Enter1"){
  setType("password")
  setPin("1")
}
else if(pin === "Please enter a pin code and then click on Enter2"){
  setType("password")
  setPin("2")
} else if(pin === "Please enter a pin code and then click on Enter3"){
  setType("password")
  setPin("3")
} else if(pin === "Please enter a pin code and then click on Enter4"){
  setType("password")
  setPin("4")
} else if(pin === "Please enter a pin code and then click on Enter5"){
  setType("password")
   setPin("5")
} else if(pin === "Please enter a pin code and then click on Enter6"){
  setType("password")
   setPin("6")
}  else if(pin === "Please enter a pin code and then click on Enter7"){
  setType("password")
  setPin("7")
} else if(pin === "Please enter a pin code and then click on Enter8"){
  setType("password")
  setPin("8")
} else if(pin === "Please enter a pin code and then click on Enter9"){
  setType("password")
  setPin("9")
} 
else if(pin === "Please enter a pin code and then click on Enter0"){
   setType("password")
  setPin("0")
} 

return (
   <div> <h2>Log in</h2>
  <div className="items">
   <div>
  <input onChange={handleChange} type={type} value={pin} readOnly/>
  </div>
<div className="buttons">
        <div>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}1`)}>1</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}2`)}>2</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}3`)}>3</button> 
</div>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}4`)}>4</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}5`)}>5</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}6`)}>6</button>
<div>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}7`)}>7</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}8`)}>8</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}9`)}>9</button>
<div className="secondary-btns">
<button disabled={disabled} onClick={clear} className="clear-btn">Clear</button>
<button disabled={disabled} onClick={(pin) => setPin((pin) => `${pin}0`)} className="zero-btn">0</button>
<button disabled={disabled} onClick={enter} className="enter-btn">Enter</button>
</div>
</div>
     </div>
  </div>
  </div>
  );
}

export default PinPad;