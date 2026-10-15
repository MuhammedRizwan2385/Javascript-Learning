// 1. display number in textbox

function displayNumber(num)
{result.value+=num
}

// 2.clear textbox
function clearBox()
{
    result.value="";
}

// 3. evaluate expression
function evaluateExp()
{
    result.value=eval(result.value);
}
// 4. remove last item from textbox
function removeLastItem(){
    result.value=result.value.slice(0,-1);
}