document.addEventListener('DOMContentLoaded', () => {
    let navbarPath;
    let isInsideHtmlDirectory = window.location.pathname.includes('/html/');
    let is_inside_blog_dir = window.location.pathname.includes('/blog/');
    let emgine_dir = window.location.pathname.includes('/emgine/');

    // Determine the correct path to the navbar file
    if (!is_inside_blog_dir)
    {
        navbarPath = isInsideHtmlDirectory ? '../html/navbar.html' : 'html/navbar.html';
        
    }
    else
    {
        navbarPath = "../navbar.html";
    }
    console.log("navbar path is " + navbarPath);
    console.log("is inside of html dir? " + isInsideHtmlDirectory);
    console.log("is inside of blog dir? " + is_inside_blog_dir);

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
            if (isInsideHtmlDirectory && !is_inside_blog_dir) 
            {
                // Remove 'html/' from href if in the html directory
                if (href.includes('html/') && !is_inside_blog_dir) 
                {
                    link.setAttribute('href', href.replace('html/', ''));
                }
                if (href.match("index.html") && !is_inside_blog_dir)
                {
                    link.setAttribute('href', '../index.html')
                }
            }
            if (is_inside_blog_dir)
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
