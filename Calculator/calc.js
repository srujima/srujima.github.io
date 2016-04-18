function btnadd()
    {
        document.Calculator.display.value += "+";
    }
function btnsub()
    {
        document.Calculator.display.value += "-";
    }
function btnmulty()
    {
        document.Calculator.display.value += "*";
    }
function btnmod()
    {
        document.Calculator.display.value += "%";
    }
function btndeci()
    {
        document.Calculator.display.value += ".";
    }
function btndiv()
    {
        document.Calculator.display.value += "/";
    }

   function btnclear()
    {
   document.Calculator.display.value = "";
}

function backspace()
{
	document.Calculator.display.value = value.slice(0, 1);
}
