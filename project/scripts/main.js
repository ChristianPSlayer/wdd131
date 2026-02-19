const projects = [
    {
        title: "Maya 3D Character",
        category: "maya",
        description: "Professional organic modeling.",
        image: "images/mayaRender.jpg",
        gallery: ["images/mayaRender.jpg","images/chess.jpg", "images/Barrel.jpg", "images/Bridge.jpg", "images/Hammer.jpg", ],
       
        github: "#"
    },
    {
        title: "Temple Website",
        category: "web",
        description: "Dynamic filtering project with JS.",
        image: "images/TempleWeb.png",
        demo: "https://christianpslayer.github.io/wdd131/filtered-temples.html",
        github: "https://github.com/ChristianPSlayer/wdd131/blob/main/script.js",
    },
    {
        title: "C# Scripture Memorizer",
        category: "csharp",
        description: "Console logic in C# (OOP).",
        image: "images/ScriptureMemorizer.png",
        github: "https://github.com/ChristianPSlayer/cse210-projects/blob/main/week03/ScriptureMemorizer/Program.cs"
    }
];

const grid = document.getElementById('project-grid');

function displayProjects() {
    grid.innerHTML = "";
    
    projects.forEach(project => {
        const card = document.createElement('section');
        card.className = 'card';
        
       
        card.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <p>${project.description}</p>
            <div class="card-buttons">
                <button class="view-btn">Ver Detalles</button> 
                ${project.category !== 'maya' ? 
                    `<a href="${project.github}" target="_blank" class="github-btn">GitHub Code</a>` 
                    : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="demo-btn">Live Demo</a>` : ''}
            </div>
        `;
        
       
        const btn = card.querySelector('.view-btn');
        
        
        btn.addEventListener('click', () => {
            openModal(project); 
        });

        grid.appendChild(card);
    });
}




//  Function to open the modal
let currentImageIndex = 0;
let currentProjectGallery = [];

function openModal(project) {
    const modal = document.getElementById("projectModal");
    const modalImg = document.getElementById("imgModal");
    const modalTitle = document.getElementById("modalTitle");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (modal) {
        modal.style.display = "block";
        modalTitle.textContent = project.title;
        
        //Set up the gallerry
        if (project.category === 'maya' && project.gallery) {
            currentProjectGallery = project.gallery;
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else {
            currentProjectGallery = [project.image];
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }

        currentImageIndex = 0;
        updateModalImage();
    }
}

function updateModalImage() {
    const modalImg = document.getElementById("imgModal");
    modalImg.src = currentProjectGallery[currentImageIndex];
}


document.getElementById("nextBtn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % currentProjectGallery.length;
    updateModalImage();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + currentProjectGallery.length) % currentProjectGallery.length;
    updateModalImage();
});

const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

// Event Listener to open/close the menu
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        const email = document.querySelector('#email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });
}


function trackVisits() {
    const visitDisplay = document.querySelector("#visit-count");
    let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

    if (visitDisplay) {
        if (numVisits !== 0) {
            
            visitDisplay.textContent = `This is your visit number: ${numVisits}`;
        } else {
            visitDisplay.textContent = `Welcome to my portfolio for the first time!`;
        }
    }

    numVisits++;
    localStorage.setItem("visits-ls", numVisits);
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const navMenu = document.querySelector('#nav-menu');
        const menuButton = document.querySelector('#menu-button');

       
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            menuButton.classList.remove('open');
        }
    }
});


const closeBtn = document.querySelector(".close");
if (closeBtn) {
    closeBtn.onclick = function () {
        document.getElementById("projectModal").style.display = "none";
    }
}


window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

displayProjects();
trackVisits();