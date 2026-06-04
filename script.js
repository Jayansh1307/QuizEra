// ── QUESTION BANK ─────────────────────────────────────────────────────────────

const QUESTIONS = {
  webdev: {
    label: "Web Development",
    icon: "",
    easy: [
      { q: "What does HTML stand for?", options: ["HyperText Markup Language","HighText Machine Language","Hyperlink and Text Markup Language","Home Tool Markup Language"], ans: 0, exp: "HTML stands for HyperText Markup Language — the standard language for structuring web pages." },
      { q: "Which CSS property changes text color?", options: ["font-color","text-color","color","foreground"], ans: 2, exp: "The 'color' property in CSS is used to set the foreground (text) color of an element." },
      { q: "Which tag is used to create a hyperlink in HTML?", options: ["<link>","<a>","<href>","<url>"], ans: 1, exp: "The <a> (anchor) tag is used to create hyperlinks. The URL goes in the href attribute." },
      { q: "What does CSS stand for?", options: ["Colorful Style Sheets","Computer Style Sheets","Cascading Style Sheets","Creative Style Sheets"], ans: 2, exp: "CSS stands for Cascading Style Sheets — it describes how HTML elements are displayed." },
      { q: "Which is the correct way to write a comment in JavaScript?", options: ["<!-- comment -->","// comment","** comment","## comment"], ans: 1, exp: "In JavaScript, single-line comments start with //. Multi-line comments use /* */." },
      { q: "Which HTML tag is used for the largest heading?", options: ["<h6>","<heading>","<h1>","<head>"], ans: 2, exp: "<h1> defines the most important (largest) heading. HTML has six heading levels: h1–h6." },
      { q: "What does the 'div' element represent?", options: ["A table row","A document section / division","An inline image","A list item"], ans: 1, exp: "The <div> element is a block-level container used to group other HTML elements." },
      { q: "Which HTTP method is used to submit form data?", options: ["GET","DELETE","PUT","POST"], ans: 3, exp: "POST sends form data in the HTTP request body, making it the standard method for submitting forms." },
      { q: "Which property makes text bold in CSS?", options: ["font-style: bold","font-weight: bold","text-style: bold","text-weight: bold"], ans: 1, exp: "font-weight: bold (or font-weight: 700) makes text appear bold." },
      { q: "Which HTML element is used to define JavaScript code?", options: ["<js>","<code>","<script>","<javascript>"], ans: 2, exp: "The <script> tag embeds or references JavaScript code in an HTML document." },
    ],
    medium: [
      { q: "What is the default display property of a <span> element?", options: ["block","flex","inline","none"], ans: 2, exp: "<span> is an inline-level element by default, meaning it doesn't start on a new line." },
      { q: "What does JSON stand for?", options: ["Java Source Object Notation","JavaScript Object Notation","JavaScript Oriented Network","Java String Output Notation"], ans: 1, exp: "JSON stands for JavaScript Object Notation — a lightweight data-interchange format." },
      { q: "Which CSS selector targets elements with a specific class?", options: ["#classname",".classname","*classname","@classname"], ans: 1, exp: "A class selector starts with a dot (.) followed by the class name, e.g. .myClass." },
      { q: "What is the purpose of the 'viewport' meta tag?", options: ["SEO optimization","Setting page language","Controlling layout on mobile devices","Defining charset"], ans: 2, exp: "The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling on different screen sizes." },
      { q: "Which of these is a JavaScript framework?", options: ["Laravel","Django","React","Rails"], ans: 2, exp: "React is a JavaScript library/framework for building user interfaces, developed by Meta." },
      { q: "What is the box model in CSS?", options: ["A way to create 3D boxes","Content, padding, border, and margin around an element","A grid system","A JavaScript model object"], ans: 1, exp: "The CSS box model describes the rectangular boxes generated for elements, consisting of content, padding, border, and margin." },
      { q: "What does the 'position: absolute' CSS property do?", options: ["Fixes element to viewport","Positions relative to parent","Positions relative to nearest positioned ancestor","Removes from flow, positions to document"], ans: 2, exp: "position: absolute removes the element from the normal flow and positions it relative to its nearest positioned ancestor." },
      { q: "Which SQL clause filters records after grouping?", options: ["WHERE","HAVING","FILTER","ORDER BY"], ans: 1, exp: "HAVING is used to filter groups after GROUP BY, similar to how WHERE filters rows." },
      { q: "In JavaScript, what is the output of typeof null?", options: ['"null"','"undefined"','"object"','"boolean"'], ans: 2, exp: "typeof null returns 'object' — this is a well-known JavaScript bug that was kept for backward compatibility." },
      { q: "What does CRUD stand for in web development?", options: ["Create, Read, Update, Delete","Connect, Retrieve, Upload, Download","Clone, Render, Use, Deploy","Control, Route, Update, Deploy"], ans: 0, exp: "CRUD represents the four basic operations of persistent storage: Create, Read, Update, and Delete." },
    ],
    hard: [
      { q: "What is the purpose of the 'defer' attribute on a <script> tag?", options: ["Loads script in a web worker","Executes script after HTML parsing","Blocks page rendering","Loads script synchronously"], ans: 1, exp: "The defer attribute tells the browser to execute the script after HTML parsing is complete, without blocking page rendering." },
      { q: "In CSS, which value of 'position' is used to create a sticky header?", options: ["fixed","relative","sticky","absolute"], ans: 2, exp: "position: sticky makes an element stick within its scroll container once it hits a specified threshold." },
      { q: "What is a closure in JavaScript?", options: ["A method to close browser windows","A function that retains access to its lexical scope","An error-handling block","A type of loop"], ans: 1, exp: "A closure is a function that remembers and can access variables from its outer (enclosing) scope even after the outer function has returned." },
      { q: "Which HTTP status code means 'Too Many Requests'?", options: ["401","403","429","503"], ans: 2, exp: "HTTP 429 Too Many Requests indicates the user has sent too many requests in a given time — often used in rate limiting." },
      { q: "What is the difference between localStorage and sessionStorage?", options: ["No difference","sessionStorage persists across tabs","localStorage clears on tab close","sessionStorage clears when tab is closed"], ans: 3, exp: "sessionStorage data is cleared when the browser tab is closed, while localStorage persists until explicitly cleared." },
      { q: "Which CSS pseudo-class selects the first child of a parent?", options: [":first",":first-child",":nth-child(0)",":child-first"], ans: 1, exp: ":first-child selects an element that is the first child of its parent, regardless of element type." },
      { q: "What is the purpose of the 'use strict' directive in JavaScript?", options: ["Enables strict type checking","Locks variable assignments","Enforces safer, stricter parsing and error handling","Imports all modules strictly"], ans: 2, exp: "'use strict' enables strict mode, which catches common coding mistakes, prevents use of undeclared variables, and makes JS safer." },
      { q: "What does XSS stand for in web security?", options: ["Cross-Site Scripting","Extra Server Session","XML Style Syntax","Cross-Server Storage"], ans: 0, exp: "XSS (Cross-Site Scripting) is a security vulnerability where attackers inject malicious scripts into web pages viewed by other users." },
      { q: "In REST APIs, which HTTP method is idempotent but NOT safe?", options: ["GET","POST","PUT","PATCH"], ans: 2, exp: "PUT is idempotent (same request gives same result) but not safe since it modifies server-side data." },
      { q: "Which JavaScript method is used to parse a JSON string into an object?", options: ["JSON.parse()","JSON.stringify()","JSON.decode()","JSON.convert()"], ans: 0, exp: "JSON.parse() converts a JSON-formatted string into a JavaScript object." },
    ]
  },
  dsa: {
    label: "DSA",
    icon: "",
    easy: [
      { q: "Which data structure works on FIFO principle?", options: ["Stack","Queue","Tree","Graph"], ans: 1, exp: "Queue follows First In First Out (FIFO) — the first element added is the first to be removed." },
      { q: "What is the time complexity of accessing an element in an array by index?", options: ["O(n)","O(log n)","O(1)","O(n²)"], ans: 2, exp: "Array access by index is O(1) — constant time, as it's a direct memory access." },
      { q: "Which data structure uses LIFO principle?", options: ["Queue","Stack","Linked List","Heap"], ans: 1, exp: "Stack uses Last In First Out (LIFO) — the last element pushed is the first to be popped." },
      { q: "What is a linked list?", options: ["Array with sorted elements","A sequence of nodes where each points to the next","A key-value store","A two-dimensional array"], ans: 1, exp: "A linked list is a linear data structure where elements (nodes) are connected via pointers to the next node." },
      { q: "What is the root node?", options: ["A node with no children","The topmost node of a tree","The last node in a list","A leaf node"], ans: 1, exp: "The root node is the topmost node of a tree — it has no parent node." },
      { q: "Which data structure is used for BFS traversal?", options: ["Stack","Queue","Heap","Array"], ans: 1, exp: "Breadth-First Search uses a Queue to track the next vertex to visit." },
      { q: "What is an array?", options: ["A dynamic list with no size limit","A collection of elements stored at contiguous memory locations","A key-value pair structure","A self-balancing tree"], ans: 1, exp: "An array stores elements at contiguous memory locations, allowing O(1) index-based access." },
      { q: "What does a stack's 'push' operation do?", options: ["Removes the top element","Adds an element to the top","Searches for an element","Sorts elements"], ans: 1, exp: "push() adds a new element to the top of the stack." },
      { q: "What is the maximum number of children a binary tree node can have?", options: ["1","2","3","Unlimited"], ans: 1, exp: "A binary tree node can have at most 2 children — a left child and a right child." },
      { q: "Which of these is a non-linear data structure?", options: ["Array","Stack","Queue","Tree"], ans: 3, exp: "Trees are non-linear — elements are arranged hierarchically rather than sequentially." },
    ],
    medium: [
      { q: "What is the worst-case time complexity of Binary Search?", options: ["O(1)","O(n)","O(log n)","O(n log n)"], ans: 2, exp: "Binary search has O(log n) worst-case complexity as it halves the search space with each step." },
      { q: "Which sorting algorithm has average case O(n log n)?", options: ["Bubble Sort","Selection Sort","Quick Sort","Insertion Sort"], ans: 2, exp: "Quick Sort averages O(n log n), though its worst case is O(n²) when poorly pivoted." },
      { q: "What is a hash collision?", options: ["Two keys mapped to the same index","A hash function returning null","Stack overflow in hashing","Two identical keys"], ans: 0, exp: "A hash collision occurs when two different keys produce the same hash value/index." },
      { q: "In a binary tree, a node with no children is called?", options: ["Root","Branch","Leaf","Parent"], ans: 2, exp: "A leaf node (or external node) is a tree node that has no children." },
      { q: "What is the space complexity of merge sort?", options: ["O(1)","O(log n)","O(n)","O(n²)"], ans: 2, exp: "Merge sort requires O(n) extra space for the temporary arrays used during merging." },
      { q: "What is the best-case time complexity of Bubble Sort?", options: ["O(n²)","O(n log n)","O(n)","O(1)"], ans: 2, exp: "With an optimized implementation, Bubble Sort runs in O(n) when the array is already sorted." },
      { q: "Which data structure is best for implementing a recursive function's call stack?", options: ["Queue","Stack","Heap","Linked List"], ans: 1, exp: "Function calls and recursion are naturally managed with a stack (LIFO)." },
      { q: "What does DFS stand for?", options: ["Data File System","Depth-First Search","Direct Function Stack","Dynamic Flow Search"], ans: 1, exp: "DFS stands for Depth-First Search — it explores as far as possible along each branch before backtracking." },
      { q: "What is the time complexity of inserting into a hash table (average case)?", options: ["O(n)","O(log n)","O(1)","O(n²)"], ans: 2, exp: "Hash table insertion is O(1) on average, assuming a good hash function with minimal collisions." },
      { q: "What is an adjacency matrix used for?", options: ["Representing sorted arrays","Representing graph connections","Storing hash table data","Balancing trees"], ans: 1, exp: "An adjacency matrix is a 2D array used to represent which vertices of a graph are adjacent to each other." },
    ],
    hard: [
      { q: "What is the worst-case time complexity of insertion in an AVL tree?", options: ["O(1)","O(log n)","O(n)","O(n log n)"], ans: 1, exp: "AVL tree insertion is O(log n) in all cases because the tree remains balanced with a height of O(log n)." },
      { q: "Which data structure is best for implementing a priority queue efficiently?", options: ["Sorted array","Stack","Heap","Linked list"], ans: 2, exp: "A heap (min-heap or max-heap) gives O(log n) insert and O(1) peek for priority queues." },
      { q: "What is a spanning tree?", options: ["A tree that spans multiple data centers","A subgraph that is a tree and includes all vertices","A tree that has a single root","A directed tree"], ans: 1, exp: "A spanning tree of a graph is a subgraph that includes all vertices with minimum edges (no cycles)." },
      { q: "What is dynamic programming primarily used for?", options: ["Breaking problems into independent subproblems","Solving problems with overlapping subproblems and optimal substructure","Recursive traversal only","Graph coloring"], ans: 1, exp: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation (memoization)." },
      { q: "What is the Bellman-Ford algorithm used for?", options: ["Minimum spanning tree","Single-source shortest path (handles negative weights)","Topological sort","Graph coloring"], ans: 1, exp: "Bellman-Ford finds the shortest path from a source vertex and, unlike Dijkstra's, handles graphs with negative weight edges." },
      { q: "What is the time complexity of Dijkstra's algorithm using a min-heap?", options: ["O(V²)","O(E log V)","O(V log E)","O(E + V)"], ans: 1, exp: "With a binary min-heap, Dijkstra's runs in O(E log V) where E is edges and V is vertices." },
      { q: "What is a Red-Black tree?", options: ["A tree with red and black nodes for aesthetic purposes","A self-balancing BST with color properties ensuring balance","A type of B-tree","A heap variant"], ans: 1, exp: "A Red-Black tree is a self-balancing binary search tree where each node has a color property, and coloring rules ensure the tree stays balanced in O(log n) operations." },
      { q: "What does amortized analysis measure?", options: ["Worst-case time for a single operation","Average time per operation over a sequence of operations","Space usage","Best-case only"], ans: 1, exp: "Amortized analysis computes the average cost per operation over a sequence, smoothing out occasional expensive operations." },
      { q: "What is the purpose of a disjoint set (Union-Find)?", options: ["Sorting elements","Efficiently tracking connected components and merging sets","Searching sorted arrays","Graph traversal"], ans: 1, exp: "Union-Find tracks a partition of elements into disjoint sets and supports efficient union and find operations, commonly used in Kruskal's algorithm." },
      { q: "What is the time complexity of building a heap from an unsorted array?", options: ["O(n log n)","O(n²)","O(n)","O(log n)"], ans: 2, exp: "Building a heap (heapify) from an array takes O(n) time using the bottom-up approach." },
    ]
  },
  networking: {
    label: "Data Communication and Networking",
    icon: "",
    easy: [
      { q: "What does IP stand for?", options: ["Internet Protocol","Internal Process","Interface Port","Input Packet"], ans: 0, exp: "IP stands for Internet Protocol — the principal communications protocol for routing packets across networks." },
      { q: "Which layer of the OSI model handles routing?", options: ["Data Link","Transport","Network","Session"], ans: 2, exp: "The Network layer (Layer 3) handles logical addressing and routing of data packets between networks." },
      { q: "What is the default port for HTTP?", options: ["443","22","80","8080"], ans: 2, exp: "HTTP uses port 80 by default. HTTPS uses port 443." },
      { q: "What does DNS stand for?", options: ["Data Network System","Domain Name System","Dynamic Name Service","Distributed Network Service"], ans: 1, exp: "DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses." },
      { q: "What is a MAC address?", options: ["A software license key","A unique hardware identifier for a network interface","An IP address type","A type of protocol"], ans: 1, exp: "A MAC (Media Access Control) address is a unique hardware identifier assigned to a network interface card." },
      { q: "How many layers does the OSI model have?", options: ["4","5","7","9"], ans: 2, exp: "The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application." },
      { q: "What does LAN stand for?", options: ["Large Area Network","Local Area Network","Linked Access Node","Logical Address Number"], ans: 1, exp: "LAN stands for Local Area Network — a network confined to a small area like an office or home." },
      { q: "Which device connects multiple networks together?", options: ["Switch","Hub","Router","Repeater"], ans: 2, exp: "A router connects different networks and routes data packets between them using IP addresses." },
      { q: "What is the default port for HTTPS?", options: ["80","21","443","8080"], ans: 2, exp: "HTTPS (secure HTTP) uses port 443 by default." },
      { q: "What does WAN stand for?", options: ["Wired Area Network","Wide Area Network","Wireless Access Node","Web Application Network"], ans: 1, exp: "WAN stands for Wide Area Network — a network that spans a large geographical area, like the internet." },
    ],
    medium: [
      { q: "What is the difference between TCP and UDP?", options: ["TCP is faster, UDP is reliable","TCP is connection-oriented and reliable; UDP is connectionless and fast","No difference","TCP is used for video, UDP for text"], ans: 1, exp: "TCP ensures reliable, ordered delivery via connections. UDP is connectionless and faster but doesn't guarantee delivery — used for streaming and gaming." },
      { q: "What is subnetting?", options: ["Dividing a network into smaller networks","Combining multiple networks","Encrypting network traffic","A routing protocol"], ans: 0, exp: "Subnetting divides a larger IP network into smaller sub-networks (subnets) for better management and security." },
      { q: "What does ARP stand for?", options: ["Address Resolution Protocol","Application Routing Protocol","Autonomous Relay Point","Access Request Package"], ans: 0, exp: "ARP (Address Resolution Protocol) maps an IP address to its corresponding MAC address on a local network." },
      { q: "Which protocol sends email from client to server?", options: ["IMAP","POP3","FTP","SMTP"], ans: 3, exp: "SMTP (Simple Mail Transfer Protocol) is used to send emails from a client to a server or between servers." },
      { q: "What is a firewall?", options: ["A physical barrier in a server room","Hardware/software that monitors and filters network traffic","A network router","An encryption protocol"], ans: 1, exp: "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules." },
      { q: "What is NAT used for?", options: ["Encrypting traffic","Translating private IP addresses to a public IP","Assigning MAC addresses","Routing between VLANs"], ans: 1, exp: "NAT (Network Address Translation) maps private IP addresses to a single public IP, allowing many devices to share one public address." },
      { q: "What is the purpose of DHCP?", options: ["Encrypting data","Automatically assigning IP addresses","Resolving domain names","Routing packets"], ans: 1, exp: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices." },
      { q: "Which protocol is used for secure remote login?", options: ["Telnet","FTP","SSH","HTTP"], ans: 2, exp: "SSH (Secure Shell) provides an encrypted channel for secure remote login and command execution." },
      { q: "What is a subnet mask?", options: ["A type of firewall","A number that separates the network and host portions of an IP","A MAC address filter","A routing protocol"], ans: 1, exp: "A subnet mask is a 32-bit number that divides an IP address into network and host parts." },
      { q: "What does FTP stand for?", options: ["File Transfer Protocol","Fast Transmission Protocol","Forwarding Transfer Process","Fixed Tunnel Protocol"], ans: 0, exp: "FTP (File Transfer Protocol) is a standard network protocol for transferring files between a client and server." },
    ],
    hard: [
      { q: "What is the purpose of the TTL field in an IP packet?", options: ["Defines packet priority","Limits packet lifetime to prevent infinite loops","Specifies transport protocol","Indicates packet size"], ans: 1, exp: "TTL (Time To Live) decrements at each router hop and the packet is discarded at TTL=0, preventing packets from circulating forever." },
      { q: "What is BGP used for?", options: ["Internal routing within a LAN","Routing between autonomous systems on the internet","DNS resolution","Email routing"], ans: 1, exp: "BGP (Border Gateway Protocol) is the protocol for routing traffic between autonomous systems (AS) on the internet — the backbone routing protocol." },
      { q: "In IPv6, how many bits is an address?", options: ["32","64","128","256"], ans: 2, exp: "IPv6 uses 128-bit addresses, compared to IPv4's 32-bit addresses, providing vastly more unique addresses." },
      { q: "What does HTTPS use to encrypt communication?", options: ["MD5","SHA-256 only","SSL/TLS","Base64"], ans: 2, exp: "HTTPS uses SSL/TLS (Secure Sockets Layer / Transport Layer Security) to encrypt the communication between client and server." },
      { q: "What is a VLAN?", options: ["A wireless network standard","A virtual LAN that groups devices logically regardless of physical location","A type of modem","A VPN protocol"], ans: 1, exp: "A VLAN (Virtual LAN) allows devices on different physical networks to be grouped together logically, improving security and management." },
      { q: "What is the three-way handshake in TCP?", options: ["SYN, ACK, FIN","SYN, SYN-ACK, ACK","CONNECT, CONFIRM, DONE","INIT, READY, GO"], ans: 1, exp: "TCP establishes a connection via: SYN (client initiates), SYN-ACK (server acknowledges), ACK (client confirms) — a three-way handshake." },
      { q: "What is OSPF used for?", options: ["Translating domain names","Interior gateway routing using link-state algorithm","Email delivery","Network address translation"], ans: 1, exp: "OSPF (Open Shortest Path First) is a link-state routing protocol used within a single autonomous system to find the shortest path." },
      { q: "What is a packet?", options: ["A full data file","A small unit of data transmitted over a network","A network device","An encryption key"], ans: 1, exp: "A packet is the basic unit of data transmitted over a network, containing a header (routing info) and payload (actual data)." },
      { q: "What does QoS stand for in networking?", options: ["Queue of Services","Quality of Service","Quantity of Signals","Queue on Switch"], ans: 1, exp: "QoS (Quality of Service) refers to technologies that manage network traffic to reduce latency and ensure performance for priority data." },
      { q: "What is the main difference between a hub and a switch?", options: ["Hubs are faster","Switches send data to all ports; hubs send only to the intended port","Hubs use IP addresses; switches use MAC addresses","A switch broadcasts; a hub is selective"], ans: 1, exp: "A hub broadcasts data to all connected devices. A switch intelligently forwards data only to the specific device using MAC addresses." },
    ]
  },
};

const TIMER_SECONDS = 30;
const categories = Object.keys(QUESTIONS);

let selectedCategory = null;
let selectedDifficulty = 'easy';
let questions = [];
let currentQ = 0;
let answers = [];
let timerInterval = null;
let timeLeft = TIMER_SECONDS;
let answered = false;

const catGrid = document.getElementById('cat-grid');

categories.forEach(key => {
  const d = QUESTIONS[key];
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.dataset.key = key;
  card.innerHTML = `
    <span class="cat-icon">${d.icon}</span>
    <div class="cat-name">${d.label}</div>
    <div class="cat-meta">${d.easy.length * 3} questions · 3 difficulty levels</div>
    <div class="cat-check"><svg viewBox="0 0 12 12"><polyline points="2 6 5 9 10 3"/></svg></div>
  `;
  card.addEventListener('click', () => {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedCategory = key;
    const btn = document.getElementById('start-btn');
    btn.disabled = false;
    btn.textContent = `Start ${d.label} Quiz`;
  });
  catGrid.appendChild(card);
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedDifficulty = btn.dataset.diff;
  });
});

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('btn-skip').addEventListener('click', () => { clearInterval(timerInterval); autoSkip(); });
document.getElementById('btn-next').addEventListener('click', advanceQuestion);
document.getElementById('btn-retry').addEventListener('click', startQuiz);
document.getElementById('btn-home').addEventListener('click', () => { clearInterval(timerInterval); showScreen('screen-home'); });

function startQuiz() {
  questions = [...QUESTIONS[selectedCategory][selectedDifficulty]];
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  currentQ = 0;
  answers = new Array(questions.length).fill(null);
  showScreen('screen-quiz');
  renderQuestion();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderQuestion() {
  const q = questions[currentQ];
  answered = false;

  document.getElementById('q-current').textContent = currentQ + 1;
  document.getElementById('q-total').textContent = questions.length;
  document.getElementById('q-num').textContent = `Question ${currentQ + 1}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('explanation-box').classList.remove('show');

  const pct = (currentQ / questions.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-skip').style.display = '';
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_SECONDS;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoSkip();
    }
  }, 1000);
}

function updateTimerUI() {
  const pill = document.getElementById('timer-pill');
  document.getElementById('timer-text').textContent = timeLeft;
  pill.classList.toggle('warning', timeLeft <= 10);
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const q = questions[currentQ];
  answers[currentQ] = idx;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
    if (i === idx && idx !== q.ans) btn.classList.add('wrong');
    if (i === idx) btn.classList.add('selected');
  });

  document.getElementById('explanation-text').textContent = q.exp;
  document.getElementById('explanation-box').classList.add('show');
  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-skip').style.display = 'none';
}

function autoSkip() {
  if (answered) return;
  answered = true;
  answers[currentQ] = -1;

  const q = questions[currentQ];
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
  });

  document.getElementById('explanation-text').textContent = q.exp;
  document.getElementById('explanation-box').classList.add('show');
  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-skip').style.display = 'none';
}

function advanceQuestion() {
  currentQ++;
  if (currentQ >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  clearInterval(timerInterval);

  let correct = 0, wrong = 0, skipped = 0;
  answers.forEach((ans, i) => {
    if (ans === -1 || ans === null) skipped++;
    else if (ans === questions[i].ans) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / questions.length) * 100);

  document.getElementById('score-pct').textContent = pct + '%';
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-skipped').textContent = skipped;

  const circumference = 2 * Math.PI * 58;
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('ring-fill');
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => {
    ring.style.transition = 'stroke-dashoffset 1s ease';
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct >= 70 ? '#1A7A4A' : pct >= 40 ? '#B45309' : '#C0392B';
  }, 200);

  let title, sub;
  if (pct === 100)      { title = "Perfect score!";   sub = "You nailed every single question."; }
  else if (pct >= 80)   { title = "Excellent work!";  sub = `You got ${correct} out of ${questions.length} right.`; }
  else if (pct >= 60)   { title = "Nice effort!";     sub = `You got ${correct} out of ${questions.length} right.`; }
  else if (pct >= 40)   { title = "Room to grow.";    sub = `You got ${correct} out of ${questions.length} right — keep practicing.`; }
  else                  { title = "Keep studying!";   sub = `Only ${correct} out of ${questions.length}. Review and try again.`; }

  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub;
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  questions.forEach((q, i) => {
    const ans = answers[i];
    const isCorrect = ans === q.ans;
    const isSkipped = ans === -1 || ans === null;
    const item = document.createElement('div');
    item.className = 'review-item';
    const iconClass = isCorrect ? 'ok' : 'no';
    const iconPath = isCorrect
      ? '<polyline points="2 6 5 9 10 3"/>'
      : '<line x1="2" y1="2" x2="10" y2="10"/><line x1="10" y1="2" x2="2" y2="10"/>';
    const ansLabel = isSkipped ? 'Skipped' : `You chose: ${q.options[ans]}`;
    item.innerHTML = `
      <div class="review-icon ${iconClass}">
        <svg viewBox="0 0 12 12">${iconPath}</svg>
      </div>
      <div>
        <div class="review-q">${q.q}</div>
        <div class="review-ans">${ansLabel} · <span class="correct-ans">Correct: ${q.options[q.ans]}</span></div>
      </div>
    `;
    list.appendChild(item);
  });

  showScreen('screen-result');
}
