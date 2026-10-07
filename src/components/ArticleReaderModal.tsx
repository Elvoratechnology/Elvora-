import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative max-w-3xl w-full bg-[#0A0A0A] border border-white/20 rounded-xl my-8 overflow-hidden shadow-2xl">
        {/* Header toolbar */}
        <div className="sticky top-0 z-20 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {post.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              ELVORA Technical Journal
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>

            <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-500" />
                {post.author} ({post.authorRole})
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Intro highlight */}
          <div className="p-5 rounded-lg bg-white/[0.02] border-l-2 border-sky-400 border-y border-r border-white/[0.06] text-zinc-200 text-base leading-relaxed italic">
            "{post.content.intro}"
          </div>

          {/* Body Sections */}
          <div className="space-y-6">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  {section.heading}
                </h2>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Conclusion & Key Takeaway */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <h3 className="font-heading text-lg font-bold text-white">Strategic Summary</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{post.content.conclusion}</p>

            <div className="p-4 rounded-lg bg-sky-500/5 border border-sky-500/20 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold block mb-1">
                  Core Takeaway
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-normal">
                  {post.content.keyTakeaway}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8">
            <div>
              <span className="font-mono text-xs uppercase text-zinc-400 block mb-1">
                Ready to execute?
              </span>
              <p className="text-sm font-medium text-white">
                Estimate your custom build or discuss with ELVORA engineers.
              </p>
            </div>
            <a
              href="/planner.html"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-black font-mono text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shrink-0"
            >
              <span>Project Planner (₱)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
