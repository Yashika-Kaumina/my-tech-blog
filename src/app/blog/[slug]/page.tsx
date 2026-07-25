import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../../constants";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for optimal loading
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Articles
        </Link>
      </div>

      {/* Hero Header */}
      <header className="mb-10 text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 leading-8">
          {post.excerpt}
        </p>

        {/* Author Metadata */}
        <div className="mt-8 flex items-center justify-center sm:justify-start gap-x-4 border-b border-t border-slate-200 py-6 dark:border-slate-800">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={post.author.avatarUrl}
              alt={post.author.name}
              fill
              className="rounded-full object-cover"
              sizes="48px"
            />
          </div>
          <div className="text-left text-sm leading-6">
            <p className="font-semibold text-slate-900 dark:text-white">
              {post.author.name}
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              {post.date} &middot; {post.readTime}
            </p>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 aspect-16/9 mb-12 shadow-sm">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
          priority
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-slate max-w-none dark:prose-invert 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-slate-700 dark:prose-p:text-slate-350 prose-p:leading-8 prose-p:mb-6
        prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono
        prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:font-mono prose-pre:text-sm prose-pre:overflow-x-auto prose-pre:mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Live Demo Link */}
      {post.liveUrl && (
        <div className="mt-12 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <a
            href={post.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            🔗 View Live Demo
          </a>
        </div>
      )}
    </article>
  );
}