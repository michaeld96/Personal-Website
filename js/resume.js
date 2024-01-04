// function toggle_html_resume()
// {
//     console.log(document.getElementById("hide-html").className);
//     if(document.getElementById("hide-html").className == "hide")
//     {
        
//         document.getElementById("hide-html").className = "show";
//         console.log(document.getElementById("hide-html").className);
//     }
//     else
//     {
//         document.getElementById("hide-html").className = "hide";
//     }
// }

var render_once = false;

var resume_container = document.querySelector(".resume-container");

var hide_html = document.querySelector("#hide-html");

var footer = document.querySelector("footer");

resume_container.addEventListener('click', function() {
    if (!render_once) 
    {
        render_once = true;
        document.getElementById("hide-html").className = "show";
        console.log("ss");
        var new_html = `
        <div class="html-resume">
        <div class="grey-line"></div>
        <div class="top-bio">
            <img src="../imgs/me.png" alt="Me">
                <div class="bio-right">
                <h2 class = "name">Michael Dick</h2>
                <p class = "address"><a  target = "_blank" href="https://www.google.com/maps/place/University+of+Michigan/@42.2780591,-83.7469574,15z/data=!3m1!4b1!4m5!3m4!1s0x883cae38e7de1701:0x5ba14e5178e997e3!8m2!3d42.2780436!4d-83.7382241" class = "bio-icon"><i class="fas fa-home"></i></a>Ann Arbor, MI 48104</p>
                <p class = "phone"><a class = "bio-icon"><i class="fas fa-phone-alt"></i></a>616-902-8922</p>
                <p class = "email"><a href="contact.html" target = "_blank" class = "bio-icon"><i class="far fa-paper-plane"></i></a>mikedick@umich.edu</p>
                <p class = "linkedin"><a href="https://www.linkedin.com/in/michaeldi1996/" target = "_blank"class = "bio-icon"><i class="fab fa-linkedin-in"></i></a>https://www.linkedin.com/in/michaeldi1996/</p>
                <p><a href="http://miketdick.com/"><i class="fas fa-map-marker-alt"></i></a>miketdick.com</p>
            </div>
        </div>
        <div class="details">
            <h3>EDUCATION</h3>
            <p></p>
            <div class="section">
                <p><i>Expected: May 2024</i></p>
            </div>
            <div class="descript">
                <h4>University of Michigan</h4>
                <p>Bachelor of Science and Engineering in Computer Science</p>
                <p><b>GPA:</b> 3.84/4.00</p>
                <p>Relevant Coursework: EECS 183 (Elementary Programming Concepts), EECS 203 (Discrete Mathematics), EECS 280 (Programming and Intro Data Structures), EECS 270 (Logic Design), EECS 376(Foundations of Computer Science)</p>
            </div>
            <div class="section">
                <p><i>May 2019</i></p>
            </div> 
            <div class="descript">
                <h4>Grand Rapids Community College</h4>
                <p>Associate of Arts</p>
                <p><b>GPA:</b> 3.73/4.00 (Dean's List: Fall 2018, Winter 2019)</p>
                <p>Relevant Coursework: CIS 123(Computer Science 1), CIS 171 (Database Design and Development)</p>
            </div>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <p></p>
            <div class="section">
                <p><i>May 2022 - Current</i></p>
            </div>
            <div class="descript">
                <h4>ANN ARBOR PHARMACOMETRICS GROUP</h4>
                <p class = "work-title">Software Engineer Intern</p>
                <p>• Responsible for designing, planning, and creating R code to generate enterprise scale R-Shiny apps.</p>
                <p>• Hosted R-Shiny apps on local servers and AWS. The servers were set up with the correct environment and paths to
                    display and execute R code with the proper connections to launch R-Shiny apps.</p>
                <p>• Collaborated with a team to create a inhouse product that analysis data and performs user data manipulation.</p>
            </div>
            <div class="section">
                <p><i>Oct 2019 - Sept 2020</i></p>
            </div>
            <div class="descript">
                <h4>UNIVERSITY OF MICHIGAN - RACKHAM GRADUATE SCHOOL</h4>
                <p class = "work-title">Undergraduate Researcher and Animator</p>
                <p>• Worked with Adobe Animate, Audacity, Adobe Premiere Rush, and Adobe Illustrator to complete the animation. Research is based on the paper: “The Mentor’s Dilemma: Providing Critical Feedback Across the Racial Divide” by G.Cohen, C.Steel, and L.Ross. </p>
                <p>• Animation is shown to the new graduate students coming into the university. The video shows the importance of feedback and its connection with race. Based on The Mentor’s Dilemma written by Cohen and colleagues. Worked closely with Adam J. Matzger Ph.D. on this project. </p>
            </div>
            <div class="section">
            <p><i>May 2019 - Aug 2019</i></p>
            </div>
            <div class="descript">
                <h4>TWO MEN AND A TRUCK</h4>
                <p class = "work-title">Sales and Logisitics Intern</p>
                <p>• Responsible for 90% of the revenue for our franchise. Was number one in revenue out of all our interns in our district. Total income generating while employed for this role was an estimated total over $130,000. </p>
                <p>• Dispatched and facilitated movers/drivers. Worked with customers and driver/movers directly during the move, and would troubleshoot situation if one occurred. </p>
                <p>• Worked with Movers Who Care 2, a software the company built in-house, to book customers for jobs. </p>
                <p>•Took inbound calls from customers and sold our services either via phone or internet. </p>
            </div>
            <h3>TECHNICAL SKILLS</h3>
            <p></p>
            <div class="section">
                <p>Software Languages</p>
            </div>
            <div class="descript code-list">
                <ul>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Ruby</li>
                    <li>SQL Lite</li>
                    <li>LaTeX</li>
                    <li>PHP</li>
                </ul>
            </div>
            <div class="section">
                <p>Software Enviroments</p>
            </div>
            <div class="descript code-list">
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Visual Studio</li>
                    <li>Xcode</li>
                    <li>VIM</li>
                    <li>Redhat</li>
                    <li>UNIX</li>
                    <li>Sublime</li>
                </ul>
            </div>
        </div>
        </div>
        `;
        hide_html.insertAdjacentHTML('beforeend', new_html);
        footer.style.position = "relative";
    }

})

{/* <div class="html-resume">
<div class="grey-line"></div>
<div class="top-bio">
    <img src="../imgs/me.png" alt="Me">
        <div class="bio-right">
        <h2 class = "name">Michael Dick</h2>
        <p class = "address"><a  target = "_blank" href="https://www.google.com/maps/place/University+of+Michigan/@42.2780591,-83.7469574,15z/data=!3m1!4b1!4m5!3m4!1s0x883cae38e7de1701:0x5ba14e5178e997e3!8m2!3d42.2780436!4d-83.7382241" class = "bio-icon"><i class="fas fa-home"></i></a>Ann Arbor, MI 48104</p>
        <p class = "phone"><a class = "bio-icon"><i class="fas fa-phone-alt"></i></a>616-902-8922</p>
        <p class = "email"><a href="contact.html" target = "_blank" class = "bio-icon"><i class="far fa-paper-plane"></i></a>mikedick@umich.edu</p>
        <p class = "linkedin"><a href="https://www.linkedin.com/in/michaeldi1996/" target = "_blank"class = "bio-icon"><i class="fab fa-linkedin-in"></i></a>https://www.linkedin.com/in/michaeldi1996/</p>
        <p><a href="http://miketdick.com/"><i class="fas fa-map-marker-alt"></i></a>miketdick.com</p>
     </div>
</div>
<div class="details">
    <h3>EDUCATION</h3>
    <p></p>
    <div class="section">
        <p><i>Expected: May 2024</i></p>
    </div>
    <div class="descript">
        <h4>University of Michigan</h4>
        <p>Bachelor of Science and Engineering in Computer Science</p>
        <p><b>GPA:</b> 3.84/4.00</p>
        <p>Relevant Coursework: EECS 183 (Elementary Programming Concepts), EECS 203 (Discrete Mathematics), EECS 280 (Programming and Intro Data Structures), EECS 270 (Logic Design), EECS 376(Foundations of Computer Science)</p>
    </div>
    <div class="section">
        <p><i>May 2019</i></p>
    </div> 
    <div class="descript">
        <h4>Grand Rapids Community College</h4>
        <p>Associate of Arts</p>
        <p><b>GPA:</b> 3.73/4.00 (Dean's List: Fall 2018, Winter 2019)</p>
        <p>Relevant Coursework: CIS 123(Computer Science 1), CIS 171 (Database Design and Development)</p>
    </div>
    <h3>PROFESSIONAL EXPERIENCE</h3>
    <p></p>
    <div class="section">
        <p><i>May 2022 - Current</i></p>
    </div>
    <div class="descript">
        <h4>ANN ARBOR PHARMACOMETRICS GROUP</h4>
        <p class = "work-title">Software Engineer Intern</p>
        <p>• Responsible for designing, planning, and creating R code to generate enterprise scale R-Shiny apps.</p>
        <p>• Hosted R-Shiny apps on local servers and AWS. The servers were set up with the correct environment and paths to
            display and execute R code with the proper connections to launch R-Shiny apps.</p>
        <p>• Collaborated with a team to create a inhouse product that analysis data and performs user data manipulation.</p>
    </div>
    <div class="section">
        <p><i>Oct 2019 - Sept 2020</i></p>
    </div>
    <div class="descript">
        <h4>UNIVERSITY OF MICHIGAN - RACKHAM GRADUATE SCHOOL</h4>
        <p class = "work-title">Undergraduate Researcher and Animator</p>
        <p>• Worked with Adobe Animate, Audacity, Adobe Premiere Rush, and Adobe Illustrator to complete the animation. Research is based on the paper: “The Mentor’s Dilemma: Providing Critical Feedback Across the Racial Divide” by G.Cohen, C.Steel, and L.Ross. </p>
        <p>• Animation is shown to the new graduate students coming into the university. The video shows the importance of feedback and its connection with race. Based on The Mentor’s Dilemma written by Cohen and colleagues. Worked closely with Adam J. Matzger Ph.D. on this project. </p>
    </div>
    <div class="section">
       <p><i>May 2019 - Aug 2019</i></p>
    </div>
    <div class="descript">
        <h4>TWO MEN AND A TRUCK</h4>
        <p class = "work-title">Sales and Logisitics Intern</p>
        <p>• Responsible for 90% of the revenue for our franchise. Was number one in revenue out of all our interns in our district. Total income generating while employed for this role was an estimated total over $130,000. </p>
        <p>• Dispatched and facilitated movers/drivers. Worked with customers and driver/movers directly during the move, and would troubleshoot situation if one occurred. </p>
        <p>• Worked with Movers Who Care 2, a software the company built in-house, to book customers for jobs. </p>
        <p>•Took inbound calls from customers and sold our services either via phone or internet. </p>
    </div>
    <h3>TECHNICAL SKILLS</h3>
    <p></p>
    <div class="section">
        <p>Software Languages</p>
    </div>
    <div class="descript code-list">
        <ul>
            <li>C++</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>SQL Lite</li>
            <li>LaTeX</li>
            <li>PHP</li>
        </ul>
     </div>
     <div class="section">
         <p>Software Enviroments</p>
     </div>
     <div class="descript code-list">
         <ul>
             <li>Visual Studio Code</li>
             <li>Visual Studio</li>
             <li>Xcode</li>
             <li>VIM</li>
             <li>Redhat</li>
             <li>UNIX</li>
             <li>Sublime</li>
         </ul>
     </div>
</div>
</div> */}