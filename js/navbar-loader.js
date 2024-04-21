document.addEventListener('DOMContentLoaded', () => {
    let navbarPath;
    let isInsideHtmlDirectory = window.location.pathname.includes('/html/');
    let blog_dir = window.location.pathname.includes('/blog/');
    console.log(blog_dir);
    let emgine_dir = window.location.pathname.includes('/emgine/');

    // Determine the correct path to the navbar file
    if (!blog_dir)
    {
        navbarPath = isInsideHtmlDirectory ? '../html/navbar.html' : 'html/navbar.html';
    }
    else
    {
        navbarPath = "../html/navbar.html";
    }
    // Fetch and load the navbar
    fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Update the href attributes of anchor tags within the navbar
        document.querySelectorAll('a').forEach(link => {
            let href = link.getAttribute('href');
            // link.setAttribute('href', href.replace('html/', '../html/'))
            // console.log(link);


            // Adjust href based on current directory
            if (isInsideHtmlDirectory) 
            {
                // Remove 'html/' from href if in the html directory
                if (href.includes('html/') && !blog_dir) 
                {
                    link.setAttribute('href', href.replace('html/', ''));
                }
                if (href.match("index.html") && !blog_dir)
                {
                    link.setAttribute('href', '../index.html')
                }
            }
            if (blog_dir)
            {
                if (href.includes("index.html"))
                {
                    link.setAttribute('href', '../index.html');
                }
                else
                {
                    link.setAttribute('href', href.replace('html/', '../html/'));
                }
            } 
        });
    })
    .catch(error => {
        console.error("Error loading the navbar: ", error);
    });
});
