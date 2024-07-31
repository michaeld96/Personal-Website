function update_footer_style() 
{
    let loader_path;
    let window_width = window.innerWidth;
    let inside_html_directory = window.location.pathname.includes('/html');
    let blog_dir = window.location.pathname.includes('/blog');
    if (!blog_dir)
    {
        footer_path = inside_html_directory ? '../html/footer.html' : 'html/footer.html';
    }
    else
    {
        footer_path = '../footer.html';
    }
    
    fetch(footer_path)
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        if (!inside_html_directory && window_width < 735) 
        {
            footer.style.position = "relative";
            footer.style.bottom = "-500px";
        }
        else if (!inside_html_directory && window_width >= 735)
        {
            // footer.style.position = "absolute";
            // footer.style.bottom = "0";
            // footer.style.bottom = "bottom: 0";
            // footer.style.position = "absolute";
            // footer.style.width = "100"
            // console.log("ss");
            // document.body.style.height = "100%";
        } 
    })
}

function footer_style()
{
    let footer = document.getElementById('footer');
    if (footer)
    {
        footer.style.bottom = "-100px";
        console.log("footer should be updated")
    }
}

document.addEventListener('DOMContentLoaded', update_footer_style);
document.addEventListener('DOMContentLoaded', footer_style);


window.addEventListener('resize', function() {
    console.log(this.innerWidth);
    if (this.innerWidth < 735)
    {
        update_footer_style();
    }
})

