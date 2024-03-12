window.onload = function() {
    let styleGuide = [
        'assets/Brand_Style.jpg',
        'assets/Buttons.png',
        'assets/Colors.png',
        'assets/Components.jpg',
        'assets/Icongraphy.jpg',
        'assets/Mission_Statement.png',
        'assets/selectors.jpg',
        'assets/text_fields.jpg',
        'assets/Typography_Azeret_Mono.png',
        'assets/Typography_Unbounded.png'
    ];

    let currentIndex = 0;
    let isMouseOver = false;
    let intervalId; // Variable to store the interval ID for the carousel
    let clickProposal = 0

    const carouselImg = document.getElementById('carousel-img');
    const circlesContainer = document.getElementById('circles-container');
const textProposalL = document.getElementById('arrowsL')
const textProposalR = document.getElementById('arrowsR')
    function changeImage() {
        // Set the source of the image
        carouselImg.src = styleGuide[currentIndex];

        // Trigger the opacity animation by adding the 'fade-in' class
        carouselImg.classList.add('fade-in');

        // Update the active circle
        updateActiveCircle();

        currentIndex = (currentIndex + 1) % styleGuide.length;
    }

    function updateActiveCircle() {
        // Remove the 'active' class from all circles
        const circles = document.querySelectorAll('.circle');
        circles.forEach(circle => circle.classList.remove('active'));

        // Add the 'active' class to the current circle
        circles[currentIndex].classList.add('active');
    }

    function startCarousel() {
        // Start the image carousel if it's not already running
        if (!intervalId) {
            intervalId = setInterval(changeImage, 3000);
        }
    }

    function stopCarousel() {
        // Clear the interval to pause the carousel
        clearInterval(intervalId);
        intervalId = null;
    }

    function changeText(){
        
        let text = [
            `<h3>Overview</h3>
            <br>
            <p>This satirical website critiques the challenges and issues in modern work environments. The push for control and productivity can have significant impacts on employees' mental and physical health, especially when they are subjected to intensive work in harsh, unregulated conditions. Examining this topic in a satirical light serves as a method to address surplus labor and capitalist management. This critique is crucial for raising awareness about these issues, fostering dialogue, and advocating for necessary changes in how workplaces are structured and managed.</p>
            <p>The imaginative website is for capitalist managers who desire greater control over their workers. It offers solutions and techniques designed to push employee performance to its limits and increase managerial control over the labor force. It neglects workers' needs, such as higher living wages and basic employee benefits, to further a more capitalist approach for company success. Instead, it presents itself as a cutting-edge labor management solution for the future. The website presents itself as a trailblazing labor management solution for the future, one that is more in tune with the capitalist ideal than with the welfare of the workers.</p>`,
            `<h3>Topic Research</h3>
            <br>
            <h4>Marx critique on capitalism</h4>
            <p>The research underpinning the parody website draws from a Marxist perspective on managerial authority and the hierarchical division of labor. According to "Contradictions of the Labour Process, Worker Empowerment and Capitalist Inefficiency", Marx's three-stage development theory (cooperation, manufacture, and large-scale industry) criticizes the substantial control capitalists exert over their workforce.</p>
            <p>In this theory, Marx highlights the intentional segregation of skilled and unskilled workers, leading to a division of labor and significant wage disparity between low and high earners. This greatly impacts the lives of unskilled workers, compelling them to work extended hours to fulfill their basic needs. Additionally, a hierarchical division of labor disregards “the needs of workers as humans in terms of skill development and opportunities for intellectual engagement in their work” (Vidal, 2019).</p>
            <p>To achieve this control, capitalist management must gather "workers together into a single location under the authority of a single capitalist" and manage a "large-scale industry, distinguished by the use of machinery."</p>`,
            `<h3>Content, Structure & Components of a Website</h3><br>
            <p>The site is designed to mimic the sleek and polished look of modern tech companies, complete with clean graphics, a minimalist color palette, and trendy fonts. The design cleverly reflects the irony of the content, serving as a visual commentary on the capitalistic methods to boost productivity.</p>
            <p>Various services will be highlighted in this parody website to envision a corporate world where the speed of task completion is prioritized over fair labor conditions. The options are:</p>
            <p><span class = 'underline-text'>Distraction Alerts:</span> The service sends instant alerts to employers when potential distractions are detected, such as checking personal emails, browsing social media, or taking longer-than-allowed breaks. It humorously overstates the importance of complete focus and the necessity for capitalist management to maintain total control over the workforce.</p> 
           
            `,
            ` <p><span class = 'underline-text'>Surveillance Dashboard:</span> EffiDyst promises a real-time surveillance dashboard to corporations where employers can monitor every aspect of their workers' lives. This includes productivity metrics, bio-enhancement status, and even personal activities outside of work.</p>
              <p><span class = 'underline-text'>Point-Based Reward System:</span> Workers earn points for completing tasks efficiently, and these points can be used to purchase basic necessities like bathroom breaks, meals, or even the privilege of leaving work early. The satire lies in the commodification of basic human needs and the urge from employers to incorporate discipline in the workers' habits.</p>
             <p><span class = 'underline-text'>Emotion Suppression Pills:</span> In the pursuit of maximum productivity, EffiDyst introduces a fictional product – emotion suppression pills. Employees can take these pills to eliminate distractions caused by emotions, ensuring a stoic and emotion-free work environment. The website promotes it as the key to a more emotionally stable and productive workforce.</p>
             `,
            `<p>These services aim to promote surplus labor and labor-saving machinery, two Marxist concepts that critique the value of labor. Capitalists exploit worker productivity by paying them for the hours worked, while profiting from the volume of low-skilled tasks completed by the worker, which exceeds the day's wages. Consequently, the capitalist reaps the full value of the worker's entire workday, which exceeds the hours compensated (1999, Heilbroner).</p>
            <p>The pursuit of increased profits by paying workers based on the tasks conducted, rather than the speed of completion, is a concept criticized in capitalist management and surplus labor. This is achieved by the help of labor-saving machinery, technological tools which help to manage a workforce and automate certain tasks. </p>
           `, 
           `<p>This website provides these types of tools and serves for an investment to employers who wish to increase their profits and be a step ahead from their competitors.</p>
            <p>In conclusion, the website, with its satirical approach, aims to provoke thought and dialogue about the often overlooked human aspect in corporate productivity. It serves as a social commentary on the extremes of capitalist management practices, hoping to encourage a more balanced and humane approach to workforce management.</p>`
        ];
        
const textBox1 = document.getElementById('box1')
const textBox2 = document.getElementById('box2')

  if(clickProposal == 0){
    textBox1.innerHTML = text[0]
    textBox2.innerHTML = text[1]
  

  } else if(clickProposal == 1){
    textBox1.innerHTML = text[2]
    textBox2.innerHTML = text[3]
  

  } else {
    textBox1.innerHTML = text[4]
    textBox2.innerHTML = text[5]
   
  }
    }

    // Add event listeners to pause and resume the carousel when the mouse enters or leaves the image
    carouselImg.addEventListener('mouseenter', function() {
        isMouseOver = true;
        stopCarousel();
    });

    carouselImg.addEventListener('mouseleave', function() {
        isMouseOver = false;
        startCarousel();
    });

    textProposalR.addEventListener("click", () => {
        if(clickProposal < 2)
        clickProposal++
        changeText()})
    textProposalL.addEventListener("click", () => {
        if(clickProposal > 0){
            clickProposal--
        }
       
    changeText()})
    
    // Create circles dynamically based on the number of images
    styleGuide.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', () => {
            currentIndex = index;
            changeImage();
        });
        circlesContainer.appendChild(circle);
    });

    // Start the image carousel initially
    startCarousel();
}