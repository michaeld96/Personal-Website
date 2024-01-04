document.addEventListener('DOMContentLoaded', (event) => {
    // fetch('../html/navbar.html')
    let navbar_path;
    if (window.location.pathname.endsWith('index.html')) 
    {
        navbar_path = "html/navbar.html"
    }
    else
    {
        navbar_path = "../html/navbar.html"
    }
    fetch(navbar_path)
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch( error => {
        console.error("Error loading the navbar: ", error);
    })
    console.log("hello from navbar-loader")
})
