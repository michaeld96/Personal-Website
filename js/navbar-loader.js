document.addEventListener('DOMContentLoaded', () => {
    let navbarPath;
    let isInsideHtmlDirectory = window.location.pathname.includes('/html/');

    // Determine the correct path to the navbar file
    navbarPath = isInsideHtmlDirectory ? '../html/navbar.html' : 'html/navbar.html';

    // Fetch and load the navbar
    fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Update the href attributes of anchor tags within the navbar
        document.querySelectorAll('a').forEach(link => {
            let href = link.getAttribute('href');
            
            // Adjust href based on current directory
            if (isInsideHtmlDirectory) 
            {
                // Remove 'html/' from href if in the html directory
                if (href.includes('html/')) 
                {
                    link.setAttribute('href', href.replace('html/', ''));
                }
                if (href.match("index.html"))
                {
                    link.setAttribute('href', '../index.html')
                }
            } 
        });
    })
    .catch(error => {
        console.error("Error loading the navbar: ", error);
    });
});
