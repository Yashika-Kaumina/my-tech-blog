import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "./constants";

export default function Home() {
  // Get the most recent 2 posts for the homepage
  const featuredPosts = BLOG_POSTS.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== HERO SECTION with Profile Image - Left Aligned ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-24 sm:py-32 text-white">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8">
          {/* Flex Container - Text Left, Image Right */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-end lg:gap-0">
            
            {/* ===== TEXT CONTENT - LEFT SIDE ===== */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6 animate-pulse">
                Introducing MyTechBlog
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Exploring the Frontier of  <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Modern Web Development
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:mx-0">
                A minimalist blog showcasing research, tutorials, and thoughts on React 19, Tailwind CSS v4, and scalable AI integrations. Designed for builders and creators.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="/blog"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
                >
                  Read the Blog
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 shadow-sm hover:bg-slate-800 hover:text-white transition-all duration-200"
                >
                  About the Author
                </Link>
              </div>
            </div>

            {/* ===== PROFILE IMAGE - RIGHT SIDE ===== */}
            <div className="flex-1 flex justify-center  lg:justify-end">
              <div className="relative w-100 h-100 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
                <img
                  src="/propic.png"
                  alt="Yashika Kaumina"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED POSTS SECTION ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-8 dark:border-slate-800 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Articles</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Handpicked tutorials and insights from the tech industry.</p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500"
          >
            View all posts
            <svg
              className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Featured Posts Grid */}
        <div className="mx-auto mt-12 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 aspect-3/2">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0" />
              </div>

              <div className="mt-6 flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-slate-500 dark:text-slate-400">
                  {post.date}
                </time>
                <div className="flex gap-x-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group relative">
                <h3 className="mt-4 text-xl font-bold leading-6 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Time */}
              <div className="relative mt-8 flex items-center gap-x-4 w-full border-t border-slate-100 pt-6 dark:border-slate-800">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    {post.readTime}
                  </p>
                </div>

                <div className="ml-auto z-20 relative">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500"
                  >
                    Read More
                    <svg
                      className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="bg-slate-100 dark:bg-slate-900/20 py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-xl sm:px-12 sm:py-16">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Stay in the loop</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Receive emails about React updates, Tailwind tips, and modern dev tools. No spam, unsubscribe anytime.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  suppressHydrationWarning={true}
                  className="min-w-0 flex-auto rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="flex-none rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}