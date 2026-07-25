// src/app/blog/page.tsx - හරිගැස්වූ version

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "../constants";

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          The Technical Blog
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
          In-depth tutorials, guides, and thoughts on React, Next.js, Tailwind CSS, and AI engineering.
        </p>
      </div>

      {/* Search & Filter Section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-200 pb-8 dark:border-slate-800 mb-12">
        <div className="relative flex-grow max-w-md">
          <label htmlFor="search" className="sr-only">
            Search articles
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-950 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
            placeholder="Search articles by title or content..."
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 transition-all duration-300"
            >
              {/* ✅ 1. IMAGE - Click නොවෙන විදියට */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 aspect-3/2 pointer-events-none">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0" />
              </div>

              {/* Tag & Date */}
              <div className="mt-6 flex items-center gap-x-4 text-xs pointer-events-none">
                <time dateTime={post.date} className="text-slate-500 dark:text-slate-400">
                  {post.date}
                </time>
                <div className="flex gap-x-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ✅ 2. TITLE - මේක විතරක් clickable */}
              <div className="relative w-full flex-grow pointer-events-none">
                <h3 className="mt-4 text-lg font-bold leading-6 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="pointer-events-auto cursor-pointer hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer details */}
              <div className="relative mt-8 flex items-center gap-x-3 w-full border-t border-slate-100 pt-5 dark:border-slate-800 pointer-events-none">
                <div className="relative h-8 w-8 flex-shrink-0">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="32px"
                  />
                </div>
                <div className="text-xs leading-5">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400">
                    {post.readTime}
                  </p>
                </div>

                {/* ✅ 3. READ MORE - මේකත් clickable */}
                <div className="ml-auto pointer-events-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    Read More
                    <svg
                      className="ml-0.5 h-3.5 w-3.5 transform transition-transform group-hover:translate-x-1"
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
      ) : (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/10 rounded-2xl border border-dashed border-slate-200 dark:border-slate-850">
          <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
          </svg>
          <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">No articles found</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("All");
            }}
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}