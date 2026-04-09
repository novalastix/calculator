const textbar = document.getElementById("textbar");

function insert(x)
{
    textbar.value+=x;
    textbar.focus();
    return false;
}