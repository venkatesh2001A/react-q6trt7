import React from 'react';
import '../css/calculator.css';
function Calculator() {
  return (
    <div className="wrap">
      <div name="cal" id="form" />
      <input type="text" name="display" id="output" />

      <br />
      <br />
      <input type="button" value="1" onclick="display('1')" />
      <input type="button" value="2" onclick="display('2')" />
      <input type="button" value="3" onclick="display('3')" />
      <input type="button" value="4" onclick="display('4')" />
      <br />
      <br />
      <input type="button" value="5" onclick="display('5')" />
      <input type="button" value="6" onclick="display('6')" />
      <input type="button" value="7" onclick="display('7')" />
      <input type="button" value="8" onclick="display('8')" />
      <br />
      <br />
      <input type="button" value="9" onclick="display('9')" />
      <input type="button" value="0" onclick="display('0')" />
      <input type="button" value="." onclick="display('.')" />
      <input type="button" value="C" onclick="hello('')" />
      <br />
      <br />
      <input type="button" value="+" onclick="display('+')" />
      <input type="button" value="-" onclick="display('-')" />
      <input type="button" value="*" onclick="display('*')" />
      <input type="button" value="/" onclick="display('/')" />
      <br />
      <br />
      <input type="button" value="AC" onclick="display('AC')" />
      <input type="button" value="=" onclick="solve()" />

      <div />
      <div />
      {/* /* <script>
        function solve(){' '}
        {
          (document.getElementById('output').value = eval(
            document.getElementById('output').value
          ))
        }
        function display(value){' '}
        {
          (document.getElementById('output').value =
            document.getElementById('output').value + value)
        }
      </script> */}
    </div>
  );
}

export default Calculator;
