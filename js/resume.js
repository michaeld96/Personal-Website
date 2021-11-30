function toggle_html_resume()
{
    console.log(document.getElementById("hide-html").className);
    if(document.getElementById("hide-html").className == "hide")
    {
        
        document.getElementById("hide-html").className = "show";
        console.log(document.getElementById("hide-html").className);
    }
    else
    {
        document.getElementById("hide-html").className = "hide";
    }
}