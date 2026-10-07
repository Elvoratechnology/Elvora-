import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
  return (
    <article className="cyber-card cyber-corners rounded-sm p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 bg-[#0A0A0C]/90 hover:border-cyan-400/40">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider px-2 py-0.5 rounded-sm border border-cyan-400/20 bg-cyan-400/5">
            {post.category}
          </span>
          <span className="font-mono text-[10px] text-zinc-500">{post.readTime}</span>
        </div>

        <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 leading-snug mb-3 transition-colors">
          {post.title}
        </h3>

        <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
        <span className="font-mono text-[11px] text-zinc-500">{post.date}</span>
        <button
          onClick={() => onRead(post)}
          type="button"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 group-hover:text-cyan-300 transition-colors"
        >
          <span>READ DISPATCH</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </article>
  );
};
