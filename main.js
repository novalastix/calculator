const textbar = document.getElementById("textbar");
const screendiv = document.getElementById("screen");

function insert(x)
{
    textbar.value+=x;
    textbar.focus();
    return false;
}

function submit()
{
    if(textbar.value.trim().length > 0)
    {
        addLine(textbar.value);
    }
    textbar.value="";
    textbar.focus();
    return false;
}

function addLine(text)
{
    let newline = document.createElement("div");
    newline.classList.add("line");
    newline.textContent = text;
    screendiv.appendChild(newline);
}