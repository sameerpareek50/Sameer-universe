// --- Data from your resume (New Structure) ---
const universeData = {
    sun: { 
        name: 'About Me',
        content: `<p>I am a passionate and driven Information Technology undergraduate at NIT Jalandhar with a strong foundation in Data Structures, Algorithms, and Software Development. My journey in tech is fueled by a curiosity for solving complex problems and building impactful applications. With experience in Machine Learning, full-stack web development, and data analysis, I am eager to contribute my skills to innovative projects and continue learning in a dynamic environment.</p><h3 class="text-2xl font-semibold text-white mt-6 mb-4">Contact</h3><a href="mailto:sameerpareek500@gmail.com" class="inline-block bg-blue-500/50 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500/70 transition">sameerpareek500@gmail.com</a> <a href="tel: +918696867171" class="inline-block bg-blue-500/50 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500/70 transition">+91 86968-67176</a>` 
    },
    planets: [
        { 
            name: "Education",
            moons: [
                { name: "B.Tech", content: `<h3 class="text-2xl font-semibold text-white">Dr. B.R. Ambedkar National Institute of Technology, Jalandhar</h3><p class="text-blue-300 font-medium mb-2">Bachelor of Technology in Information Technology | 2022-2026</p><p>Current CGPA: 7.97 (until 6th sem)</p>` },
                { name: "Senior Secondary", content: `<h3 class="text-2xl font-semibold text-white">Holy Spirit Sr. Sec. School, Jodhpur</h3><p class="text-blue-300 font-medium mb-2">Class XII, Science Stream | 2019-2021</p><p>Percentage: 93.2% (PCM)</p>`}
            ]
        },
        { 
            name: "Coursework", 
            content: `<p class="mb-4">Key subjects studied during my B.Tech program include:</p><div class="flex flex-wrap gap-2 mb-4"><span class="tag px-3 py-1 rounded-full">Data Structures & Algorithms</span><span class="tag px-3 py-1 rounded-full">Operating Systems</span><span class="tag px-3 py-1 rounded-full">DBMS</span><span class="tag px-3 py-1 rounded-full">Computer Networking </span> <span class="tag px-3 py-1 rounded-full">Computer Graphics</span><span class="tag px-3 py-1 rounded-full">Cryptography</span><span class="tag px-3 py-1 rounded-full">Data Analytics</span><span class="tag px-3 py-1 rounded-full">OOPs</span><span class="tag px-3 py-1 rounded-full">Software Engineering</span><span class="tag px-3 py-1 rounded-full">Data Mining </span><span class="tag px-3 py-1 rounded-full">Web Development </span><span class="tag px-3 py-1 rounded-full">Soft Computing </span></div>` 
        },
        { 
            name: "Experience",
            moons: [
                { name: "Deloitte Job Simulation", content: `<h3 class="text-2xl font-semibold text-white">Deloitte - Job Simulation</h3><p class="text-blue-300 font-medium mb-2">Data Analysis | Remote | June 2025</p><ul class="list-disc list-inside space-y-2"><li>Built a dynamic Tableau dashboard to visualize client telemetry data, uncovering key trends and improving stakeholder visibility by 60%.</li><li>Supported a forensic investigation by classifying 10,000+ Excel records to identify unfair pay patterns, influencing client compliance strategy.</li></ul> <p class="text-center mt-6 font-semibold">Certificate of Completion:</p>
                <img src="Deloitte_Certificate.png" alt="DataCom Certificate" class="rounded-lg mt-2 mx-auto border border-gray-600">` }
                // { name: "DataCom Internship", content: `<h3 class="text-2xl font-semibold text-white">DataCom - Virtual Internship</h3><p class="text-blue-300 font-medium mb-2">Software Engineer | Remote | June 2025 - July 2025</p><ul class="list-disc list-inside space-y-2"><li>Reviewed production web application and proposed 3+ key improvements to enhance speed and user experience.</li><li>Resolved 2 major bugs after root cause analysis, improving application stability by 40%.</li></ul> <p class="text-center mt-6 font-semibold">Certificate of Completion:</p>
                // <img src="DataCom_Certificate.png" alt="DataCom Certificate" class="rounded-lg mt-2 mx-auto border border-gray-600">` }
            ]
        },
        { 
            name: "Projects",
            moons: [
                { name: "Reelify", content: `<div class="flex flex-wrap gap-2 mb-4"> <ul class="list-disc list-inside space-y-2">
                <li>Developed a full-stack web app with Python, Flask, and FFmpeg, enabling 1000+ users to generate video reels by uploading images and inputting custom text.</li>

                <li>Integrated ElevenLabs API for realistic text-to-speech and built a 100% automated reel generation workflow with UUID-based session management, supporting high-concurrency uploads with 99.99% uptime and zero data breaches.</li>

                <li>Designed a responsive frontend with real-time feedback and an adaptable gallery showcasing 200+ user-generated reels, significantly boosting user engagement and experience.</li>
                </ul> </div>

                   <div class="flex flex-wrap gap-2 mb-4"> 
                <span class="tag px-3 py-1 rounded-full">Python</span><span class="tag px-3 py-1 rounded-full">Flask</span><span class="tag px-3 py-1 rounded-full">ElevenLabs API</span><span class="tag px-3 py-1 rounded-full">FFmpeg</span></div>

                <div class="flex flex-wrap gap-2 mb-4"> 
                <a href="https://github.com/sameerpareek50/Reelify" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">View on GitHub &rarr;</a></div>
                <div class="flex flex-wrap gap-2 mb-4"> 
                <a href="https://reelify-cgnr.onrender.com" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">Reelify &rarr;</a></div>` },

                { name: "Text2Sign", content: `<div class="flex flex-wrap gap-2 mb-4"> <ul class="list-disc list-inside space-y-2">
                <li>Processed 1300+ sign glosses across 5 core modules (UI, NLP, translation, animation, feedback) and deployed via Docker for seamless scalability.</li>

                <li>Achieved 90%+ token-to-sign match accuracy, integrating fallback through fingerspelling and synonym substitution for unmatched signs.</li>

                <li>Used CWASA player to animate gloss sequences with facial expressions and non-manual cues, ensuring sub-2-second response time.</li>

                <li>Aimed to impact 34M+ global hearing-impaired users, utilizing a 6-stage NLP pipeline and rule-based grammar parsing for inclusive accessibility.</li>
                </ul> </div>

                   <div class="flex flex-wrap gap-2 mb-4"> 
                <span class="tag px-3 py-1 rounded-full">Python</span><span class="tag px-3 py-1 rounded-full">Flask</span><span class="tag px-3 py-1 rounded-full">NLP</span><span class="tag px-3 py-1 rounded-full">Docker</span><span class="tag px-3 py-1 rounded-full">SIGML</span><span class="tag px-3 py-1 rounded-full">CWASA</span><span class="tag px-3 py-1 rounded-full">Stanza</span></div>

                <div class="flex flex-wrap gap-2 mb-4"> 
                <a href="https://github.com/acdevz/text2sign" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">View on GitHub &rarr;</a></div>` },
                { name: "Football Analysis", content: `<p class="mb-4">A real-time system using YOLOv5 to detect and track players, referees, and the ball in football matches, providing detailed in-game visualizations and analytics.</p><div class="flex flex-wrap gap-2 mb-4"><span class="tag px-3 py-1 rounded-full">Python</span><span class="tag px-3 py-1 rounded-full">YOLO</span><span class="tag px-3 py-1 rounded-full">OpenCV</span><span class="tag px-3 py-1 rounded-full">Pandas</span></div><a href="https://github.com/Sameer/Football-Analysis-System" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">View on GitHub &rarr;</a>` }
            ]
        },
        { 
            name: "Technical Skills", 
            content: `<h4 class="font-semibold text-white mb-2">Languages:</h4><div class="flex flex-wrap gap-2 mb-4"><span class="tag">C</span><span class="tag">C++</span><span class="tag">Python</span><span class="tag">Java</span><span class="tag">SQL</span></div><h4 class="font-semibold text-white mt-4 mb-2">AI/ML:</h4><div class="flex flex-wrap gap-2 mb-4"><span class="tag">Machine Learning</span><span class="tag">Data Science</span></div><h4 class="font-semibold text-white mt-4 mb-2">Technologies:</h4><div class="flex flex-wrap gap-2 mb-4"><span class="tag">Git</span><span class="tag">GitHub</span><span class="tag">Flask</span><span class="tag">AWS</span><span class="tag">Google Colab</span></div>`
        },
        {
            name: "Achievements",
            content: `<ul class="list-disc list-inside space-y-3"><li>Achieved AIR-3 in the HMEL Energy Quest 2024, a national-level competition by HPCL-Mittal Energy Limited.</li><li>Solved 140+ problems on LeetCode and scored 300+ on GeeksforGeeks.</li><li>Qualified for JEE Advanced 2022, ranking in the top 1% nationwide.</li><li>Secured AIR 1572 in COMEDK 2022.</li></ul>`
        },
        { 
            name: "Certificates",
            moons: [
                { name: "Quantum Computing", content: `<h3 class="text-2xl font-semibold text-white">Quantum Computing</h3><p class="text-blue-300 font-medium mb-2">Womaniun Quantum + AI Program 2024</p><p class="mb-4">Completed an intensive program covering quantum algorithms, qubits, and quantum machine learning. Gained hands-on experience with Qiskit and the IBM Quantum Experience platform.</p><div class="flex flex-wrap gap-2 mb-4"><span class="tag">Qiskit</span><span class="tag">Quantum Algorithms</span><span class="tag">IBM Quantum</span></div>
                
                <div class="flex flex-wrap gap-2 mb-4"> 
                <a href="https://drive.google.com/drive/folders/1Re0r7qMNkEhQtxB4bBYen7p-ONxQXP-7" target="_blank" class="text-blue-400 hover:text-blue-300 font-semibold">Certificates &rarr;</a></div>    ` }
            ]
        }
    ]
};

// --- Three.js Scene Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg-canvas'), antialias: true, alpha: true });
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
camera.position.z = 12;

// --- State Management Variables ---
let activeView = 'solarSystem'; // Can be 'solarSystem' or 'moonSystem'
let focusedPlanet = null;
let moonObjects = []; // To hold the THREE.Mesh objects for moons
let isAnimating = false; // To prevent clicks during camera transitions

// --- DOM Elements ---
const infoSidebar = document.getElementById('info-sidebar');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarBody = document.getElementById('sidebar-body');
const backBtn = document.getElementById('back-btn');

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xFFFF88, 1, 200);
pointLight.castShadow = true;
scene.add(pointLight);

// Starfield
const starGeometry = new THREE.BufferGeometry();
const starCount = 10900;
const posArray = new Float32Array(starCount * 3);
for(let i = 0; i < starCount * 3; i++) { posArray[i] = (Math.random() - 0.5) * 200; }
starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMaterial = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff });
const starfield = new THREE.Points(starGeometry, starMaterial);
scene.add(starfield);

// --- Create Celestial Bodies ---
const celestialBodies = []; // Will hold planets and sun
const solarSystem = new THREE.Object3D();
scene.add(solarSystem);

// --- Function to create a flag texture ---
function createFlagTexture(text, isSun = false, isMoon = false) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const fontSize = isSun ? 90 : (isMoon ? 40 : 50);
    // Make font bold and use a clear, sans-serif font
    const font = `bold ${fontSize}px Orbitron, Arial, sans-serif`;
    context.font = font;

    const textWidth = context.measureText(text).width;
    canvas.width = textWidth + 40;
    canvas.height = isMoon ? 80 : 100;

    context.font = font;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'white';
    // Add a black outline for better readability (optional)
    context.lineWidth = 6;
    context.strokeStyle = 'black';
    context.strokeText(text, canvas.width / 2, canvas.height / 2);
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return new THREE.CanvasTexture(canvas);
}

const textureLoader = new THREE.TextureLoader();

// Sun
const sunTexture = textureLoader.load('Sun.jpg'); 
const sunGeometry = new THREE.SphereGeometry(1.2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture, transparent: true });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.castShadow = false;
sun.receiveShadow = false;
sun.userData = { type: 'sun', ...universeData.sun };
solarSystem.add(sun);
celestialBodies.push(sun);

// Sun Flag
const sunFlagGroup = new THREE.Group();
sunFlagGroup.name = 'flag';
const sunPoleGeometry = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8);
const sunPoleMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const sunPoleMesh = new THREE.Mesh(sunPoleGeometry, sunPoleMaterial);
sunPoleMesh.position.y = 1.2;
sunFlagGroup.add(sunPoleMesh);
const sunFlagTexture = createFlagTexture("About Me", true);
const sunFlagWidth = sunFlagTexture.image.width / 200;
const sunFlagHeight = sunFlagTexture.image.height / 200;
const sunFlagGeometry = new THREE.PlaneGeometry(sunFlagWidth, sunFlagHeight);
const sunFlagMaterial = new THREE.MeshBasicMaterial({ map: sunFlagTexture, side: THREE.DoubleSide, transparent: true });
const sunFlagMesh = new THREE.Mesh(sunFlagGeometry, sunFlagMaterial);
sunFlagMesh.position.set(sunFlagWidth / 2, 1.2 + 0.3, 0);
sunFlagGroup.add(sunFlagMesh);
sun.add(sunFlagGroup);

// Sun Glow
const glowTexture = textureLoader.load('glo.jpg');
const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, color: 0xFFFF00, transparent: true, blending: THREE.AdditiveBlending });
const glowSprite = new THREE.Sprite(glowMaterial);
glowSprite.scale.set(4, 4, 4);
sun.add(glowSprite);

// Planets
const planetInfo = [
    { color: 0xb1adad, size: 0.5, orbitRadius: 2.0 },  // Education
    { color: 0xd3a567, size: 0.5, orbitRadius: 3.2 },  // Coursework
    { color: 0xc1440e, size: 0.5, orbitRadius: 4.4 },  // Experience
    { color: 0x6b93d6, size: 0.5, orbitRadius: 5.6 }, // Projects
    { color: 0xc99039, size: 0.5, orbitRadius: 6.8 },// Technical Skills
    { color: 0xF1C40F, size: 0.5, orbitRadius: 8.0 },// Achievements
    { color: 0x00FFD0, size: 0.5, orbitRadius: 9.2 }  // Certificates
];

universeData.planets.forEach((planetData, i) => {
    const info = planetInfo[i];
    const planetGeometry = new THREE.SphereGeometry(info.size, 32, 32);
    const planetMaterial = new THREE.MeshStandardMaterial({
        color: info.color,
        emissive: info.color,
        emissiveIntensity: 0.1,
        roughness: 0.5,
        metalness: 0.1,
        transparent: true // Needed for fading
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.castShadow = true;
    planet.receiveShadow = true;
    
    solarSystem.add(planet);
    
    const baseSpeed = 0.02 + Math.random() * 0.02; 
    planet.userData = { type: 'planet', ...planetData, orbitRadius: info.orbitRadius, baseSpeed: baseSpeed, angle: Math.random() * Math.PI * 2 };

    celestialBodies.push(planet);
    
    // Create Flag for each planet
    const flagGroup = new THREE.Group();
    flagGroup.name = 'flag';
    const poleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8);
    const poleMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    const poleMesh = new THREE.Mesh(poleGeometry, poleMaterial);
    poleMesh.position.y = info.size;
    flagGroup.add(poleMesh);
    const flagTexture = createFlagTexture(planetData.name);
    const flagWidth = flagTexture.image.width / 200;
    const flagHeight = flagTexture.image.height / 200;
    const flagGeometry = new THREE.PlaneGeometry(flagWidth, flagHeight);
    const flagMaterial = new THREE.MeshBasicMaterial({ map: flagTexture, side: THREE.DoubleSide, transparent: true });
    const flagMesh = new THREE.Mesh(flagGeometry, flagMaterial);
    flagMesh.position.set(flagWidth / 2, info.size + 0.4, 0);
    flagGroup.add(flagMesh);
    planet.add(flagGroup);
});

solarSystem.rotation.x = 0.2;

// --- Sidebar Logic ---
function openSidebar(data) {
    sidebarTitle.textContent = data.name;
    sidebarBody.innerHTML = data.content;
    infoSidebar.classList.remove('translate-x-full');
}

function closeSidebar() {
    infoSidebar.classList.add('translate-x-full');
}

document.getElementById('sidebar-close-btn').addEventListener('click', closeSidebar);

// --- UPDATED: Moon System & Camera Animation Logic ---
function focusOnPlanet(planet) {
    isAnimating = true;
    focusedPlanet = planet;
    
    const planetPosition = new THREE.Vector3();
    planet.getWorldPosition(planetPosition);

    gsap.to(camera.position, {
        duration: 1.5,
        x: planetPosition.x,
        y: planetPosition.y + 2,
        z: planetPosition.z + 5,
        ease: "power3.inOut",
        onUpdate: () => camera.lookAt(planetPosition),
        onComplete: () => {
            activeView = 'moonSystem';
            backBtn.classList.remove('hidden');
            isAnimating = false;
            createMoonsForPlanet(planet);
        }
    });

    celestialBodies.forEach(body => {
        if (body !== planet) {
            body.traverse(child => {
                if (child.material) {
                    gsap.to(child.material, { duration: 0.5, opacity: 0, onComplete: () => child.visible = false });
                }
            });
        }
    });
}

function createMoonsForPlanet(planet) {
    const moonData = planet.userData.moons;
    if (!moonData) return;

    moonData.forEach((moonItem, i) => {
        const moonOrbitRadius = 2 + i * 0.8;
        const moonSize = 0.2;
        const moonGeometry = new THREE.SphereGeometry(moonSize, 16, 16);
        const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        moon.userData = { type: 'moon', ...moonItem, angle: Math.random() * Math.PI * 2, orbitRadius: moonOrbitRadius, baseSpeed: 0.05 };
        
        const flagGroup = new THREE.Group();
        flagGroup.name = 'flag';
        const poleGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.4, 8);
        const poleMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
        const poleMesh = new THREE.Mesh(poleGeometry, poleMaterial);
        poleMesh.position.y = moonSize;
        flagGroup.add(poleMesh);
        const flagTexture = createFlagTexture(moonItem.name, false, true);
        const flagWidth = flagTexture.image.width / 200;
        const flagHeight = flagTexture.image.height / 200;
        const flagGeometry = new THREE.PlaneGeometry(flagWidth, flagHeight);
        const flagMaterial = new THREE.MeshBasicMaterial({ map: flagTexture, side: THREE.DoubleSide, transparent: true });
        const flagMesh = new THREE.Mesh(flagGeometry, flagMaterial);
        flagMesh.position.set(flagWidth / 2, moonSize + 0.2, 0);
        flagGroup.add(flagMesh);
        moon.add(flagGroup);

        planet.add(moon);
        moonObjects.push(moon);
    });
}

function returnToSolarSystem() {
    isAnimating = true;
    activeView = 'solarSystem';
    backBtn.classList.add('hidden');
    closeSidebar();
    
    gsap.to(camera.position, {
        duration: 1.5,
        x: 0,
        y: 0,
        z: 12,
        ease: "power3.inOut",
        onUpdate: () => camera.lookAt(scene.position),
        onComplete: () => isAnimating = false
    });

    moonObjects.forEach(moon => focusedPlanet.remove(moon));
    moonObjects = [];

    celestialBodies.forEach(body => {
        body.traverse(child => {
            if (child.material) {
                child.visible = true;
                gsap.to(child.material, { duration: 0.5, opacity: 1 });
            }
        });
    });

    focusedPlanet = null;
}

backBtn.addEventListener('click', returnToSolarSystem);

// --- UPDATED: Interaction Logic ---
function onMouseClick(event) {
    if (isAnimating) return;

    raycaster.setFromCamera(mouse, camera);

    const objectsToIntersect = activeView === 'moonSystem' ? moonObjects : celestialBodies;
    const intersects = raycaster.intersectObjects(objectsToIntersect, true);

    if (intersects.length > 0) {
        let clickedObject = intersects[0].object;
        while (clickedObject.parent && !clickedObject.userData.name) {
            clickedObject = clickedObject.parent;
        }

        const data = clickedObject.userData;

        if (data.type === 'planet') {
            if (data.moons && data.moons.length > 0) {
                focusOnPlanet(clickedObject);
            } else {
                openSidebar(data);
            }
        } else if (data.type === 'sun' || data.type === 'moon') {
            openSidebar(data);
        }
    }
}

function onMouseMove(event) {
    if (isAnimating) return;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const objectsToIntersect = activeView === 'moonSystem' ? moonObjects : celestialBodies;
    const intersects = raycaster.intersectObjects(objectsToIntersect, true);
    document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
}

window.addEventListener('click', onMouseClick);
window.addEventListener('mousemove', onMouseMove);

// --- UPDATED: Animation Loop ---
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();
    
    if (activeView === 'solarSystem') {
        sun.rotation.y = elapsedTime * 0.02;
        celestialBodies.forEach(body => {
            if (body.userData.type === 'planet') {
                // --- Kepler effect: faster behind sun (z < 0), normal in front (z >= 0) ---
                // Calculate the planet's position in world space
                let angle = body.userData.angle;
                const { orbitRadius } = body.userData;
                // Predict next position for speed calculation
                const x = Math.cos(angle) * orbitRadius;
                const z = Math.sin(angle) * orbitRadius;
                // If z < 0, planet is behind the sun (from camera's default perspective)
                const speedMultiplier = z < 0 ? 1 : 1;
                body.userData.angle += body.userData.baseSpeed * speedMultiplier * 0.1;
                body.position.x = Math.cos(body.userData.angle) * orbitRadius;
                body.position.z = Math.sin(body.userData.angle) * orbitRadius;
                body.rotation.y += 0.005; // Planet's self-rotation in solar system view
            }
        });
        starfield.rotation.y = elapsedTime * 0.002;
    } else if (activeView === 'moonSystem' && focusedPlanet) {
        // focusedPlanet.rotation.y += 0.005; // <-- This was the issue. Planet self-rotation is paused in focus view.

        // Moons orbit the now-static planet
        moonObjects.forEach(moon => {
            moon.userData.angle += moon.userData.baseSpeed * 0.1;
            const { orbitRadius } = moon.userData;
            moon.position.x = Math.cos(moon.userData.angle) * orbitRadius;
            moon.position.z = Math.sin(moon.userData.angle) * orbitRadius;
            moon.rotation.y += 0.01; // Moon's own self-rotation
        });
    }

    if (!isAnimating) {
        const parallaxX = mouse.x * 0.5;
        const parallaxY = mouse.y * 0.5;
        if (activeView === 'solarSystem') {
            camera.position.x += (parallaxX - camera.position.x) * 0.02;
            camera.position.y += (parallaxY - camera.position.y) * 0.02;
            camera.lookAt(scene.position);
        } else if (focusedPlanet) {
            const planetPosition = new THREE.Vector3();
            focusedPlanet.getWorldPosition(planetPosition);
            const targetX = planetPosition.x + parallaxX * 0.2;
            const targetY = planetPosition.y + 2 + parallaxY * 0.2;
            camera.position.x += (targetX - camera.position.x) * 0.02;
            camera.position.y += (targetY - camera.position.y) * 0.02;
            camera.lookAt(planetPosition);
        }
    }
    
    if (activeView === 'solarSystem') {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        const scrollPercent = Math.min(scrollY / heroHeight, 1);
        solarSystem.position.y = (1 - scrollPercent) * 20;
        solarSystem.visible = scrollPercent > 0.1;
    } else {
        solarSystem.position.y = 0;
        solarSystem.visible = true;
    }

    scene.traverse(child => {
        if (child.name === 'flag') {
            child.lookAt(camera.position);
        }
    });

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};
animate();

// --- Handle window resize ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
