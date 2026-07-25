export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "chess-swiss-tournament-system",
    title: "Chess Swiss Tournament System",
    excerpt: "Built a complete Swiss pairing system for chess tournaments with backtracking engine, round history, and pairing end detection using Python, Tkinter, and Git.",
    content: `<p>I developed a complete Swiss pairing system for chess tournaments using Python and Tkinter. This desktop application handles the complex logic of pairing players in a Swiss tournament format.</p>
    
    <h2>1. Backtracking Engine</h2>
    <p>The core of the system is a backtracking engine that efficiently generates pairings while respecting constraints like color alternation, player history, and tournament rules. The engine ensures fair and balanced pairings throughout the tournament.</p>
    
    <h2>2. Round History Tracking</h2>
    <p>Every round is stored with detailed information including player pairings, results, and color assignments. This allows players and organizers to review past rounds and verify tournament progress.</p>
    
    <h2>3. Pairing End Detection</h2>
    <p>The system automatically detects when no more valid pairings are possible, preventing infinite loops and ensuring tournament integrity. It also handles bye assignments fairly across all players.</p>
    
    <h2>Tech Stack</h2>
    <ul>
      <li><strong>Python</strong> - Core logic and backend</li>
      <li><strong>Tkinter</strong> - Desktop GUI</li>
      <li><strong>Git</strong> - Version control</li>
    </ul>
    
    <p>This project combines my passion for chess with software development, demonstrating algorithmic thinking and problem-solving skills.</p>`,
    date: "July 18, 2026",
    readTime: "5 min read",
    tags: ["Python", "ML", "Pandas"],
    imageUrl: "/chess-swiss-system.png",
    liveUrl: "https://github.com/Yashika-Kaumina/chess-swiss-system",
    author: {
      name: "Yashika Kaumina",
      avatarUrl: "/yashika.jpg"
    }
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    excerpt: "Built a multilingual student management system with PHP, MySQL, and Chart.js. Features CRUD, dashboard, role-based authentication, and PDF export.",
    content: `<p>I built a complete Student Management System using PHP and MySQL with multilingual support (Sinhala, English, Tamil). This web application helps educational institutions manage student records efficiently.</p>
    
    <h2>1. CRUD Operations & Dashboard</h2>
    <p>The system includes full CRUD (Create, Read, Update, Delete) operations for managing students. The dashboard displays key statistics including total students, average age, and class-wise distribution using Chart.js visualizations.</p>
    
    <h2>2. Role-Based Authentication</h2>
    <p>Secure authentication with role-based access control (Admin/Viewer) ensures that only authorized users can add, edit, or delete student records. Viewers have read-only access for security.</p>
    
    <h2>3. PDF Export & Multilingual Support</h2>
    <p>Student data can be exported as PDF documents using Dompdf. The system supports three languages (Sinhala, English, Tamil) with a fully translated user interface.</p>
    
    <h2>Tech Stack</h2>
    <ul>
      <li><strong>PHP</strong> - Backend logic</li>
      <li><strong>MySQL</strong> - Database</li>
      <li><strong>Chart.js</strong> - Data visualization</li>
      <li><strong>Dompdf</strong> - PDF generation</li>
    </ul>
    
    <p>This project demonstrates my full-stack development skills and ability to build practical, real-world applications.</p>`,
    date: "July 15, 2026",
    readTime: "4 min read",
    tags: ["PHP", "MySQL", "Chart.js"],
    imageUrl: "/student-management-system.png",
    liveUrl: "https://github.com/Yashika-Kaumina/php-student-management-system",
    author: {
      name: "Yashika Kaumina",
      avatarUrl: "/yashika.jpg"
    }
  },
  {
    slug: "interactive-portfolio-mockup",
    title: "Interactive Portfolio Mockup",
    excerpt: "Built a fully responsive portfolio website with dynamic tab switching, audio playback, and real-time image uploader using HTML, CSS, and JavaScript.",
    content: `<p>I designed and built a fully responsive personal portfolio website from scratch using pure HTML, CSS, and Vanilla JavaScript without any external frameworks.</p>
    
    <h2>1. Dynamic Tab Switching</h2>
    <p>The website features smooth navigation between sections (Home, About, Experience, Projects, Other, Contact) with dynamic tab switching and visual feedback for active sections.</p>
    
    <h2>2. Interactive Features</h2>
    <p>Includes a real-time image uploader for profile pictures, skill progress bars, an interactive like button with live counter, and audio playback controls for background music.</p>
    
    <h2>3. Fully Responsive Design</h2>
    <p>Built with CSS Flexbox and Grid, the website works seamlessly on all devices from mobile phones to desktop computers with a clean, modern design.</p>
    
    <h2>Tech Stack</h2>
    <ul>
      <li><strong>HTML5</strong> - Structure</li>
      <li><strong>CSS3</strong> - Styling & animations</li>
      <li><strong>JavaScript (Vanilla)</strong> - Interactivity</li>
      <li><strong>Font Awesome</strong> - Icons</li>
    </ul>
    
    <p>This self-taught hobby project showcases my frontend development skills and attention to detail.</p>`,
    date: "July 10, 2026",
    readTime: "7 min read",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/portfolio-mockup.png",
    liveUrl: "https://yashika-kaumina.github.io/my-portfolio-practice/",
    author: {
      name: "Yashika Kaumina",
      avatarUrl: "/yashika.jpg"
    }
  }
];

export const SITE_NAME = "MyTechBlog";