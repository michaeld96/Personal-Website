document.addEventListener('DOMContentLoaded', () => {
    let loader_path;
    let inside_html_directory = window.location.pathname.includes('/html');
    footer_path = inside_html_directory ? '../html/footer.html' : 'html/footer.html';
    fetch(footer_path)
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        if (!inside_html_directory) 
        {
            footer.style.position = "relative";
            footer.style.bottom = "-300px";
        }
    })
})