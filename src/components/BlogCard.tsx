import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onRead }) => {
  return (
    <article className="group border border-white/[0.07] bg-[#111111] rounded-sm p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wide">
            {post.category}
          </span>
          <span className="font-mono text-[11px] text-[#444]">{post.readTime}</span>
        </div>

        <h3 className="text-base font-semibold text-white group-hover:text-[#E8E8E8] leading-snug mb-3">
          {post.title}
        </h3>

        <p className="text-[13px] text-[#6B6B6B] leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.07] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#444]">{post.date}</span>
        <button
          onClick={() => onRead(post)}
          type="button"
          className="inline-flex items-center gap-1 text-[13px] text-[#6B6B6B] group-hover:text-white transition-colors"
        >
          <span>Read</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
