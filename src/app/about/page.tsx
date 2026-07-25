import Image from "next/image";

export default function About() {
  const skills = [
    { category: "Languages & Technologies", items: ["PHP", "Python", "MySQL", "JavaScript", "Java", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Interests & Domains", items: ["Full-Stack Development", "Machine Learning", "Data Analytics"] },
    { category: "Tools & Environments", items: ["Git & GitHub", "VS Code", "Vercel", "XAMPP", "Docker"] },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          Software Engineering undergraduate exploring full-stack engineering, data analytics, and machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Profile Card & Info */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left bg-white dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative h-32 w-32 mb-6 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-100 shadow-md">
            <Image
              src="/yashikanew.jpg"
              alt="Yashika Kaumina"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Yashika Kaumina</h2>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">Software Engineering Undergraduate</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">Saegis Campus</p>
          
          <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Hi! I&apos;m Yashika, a passionate Software Engineering undergraduate at Saegis Campus. 
            I love building web applications, exploring Machine Learning algorithms, and analyzing data 
            to uncover meaningful insights. I enjoy turning ideas into code and sharing my journey 
            through technical writing.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            I have worked on projects including a multilingual Student Management System (PHP, MySQL), 
            a Chess Swiss Tournament System (Python, Tkinter), and a fully responsive Portfolio Website 
            (HTML, CSS, JavaScript). I&apos;m currently expanding my skills in Next.js, React, and TypeScript.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/Yashika-Kaumina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yashika-kaumina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Skills & Contact Form */}
        <div className="lg:col-span-7 space-y-12">
          {/* Skills Badges Container */}
          <div className="bg-white dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Skills & Core Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Have questions or want to collaborate? Send a message.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    required
                    className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-650"
                    placeholder="Yashika"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    required
                    className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-650"
                    placeholder="Kaumina"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  suppressHydrationWarning={true}
                  className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-650"
                  placeholder="yashikamanawadu14@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-650"
                  placeholder="Your message goes here..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}