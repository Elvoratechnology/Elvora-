import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BlogCard } from '../components/BlogCard';
import { ArticleReaderModal } from '../components/ArticleReaderModal';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const categories = ['All', 'Business', 'Web Development', 'Design', 'Development', 'Technology'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 sm:py-28 relative">
      <SectionHeading
        label="[ INTELLIGENCE FEED // PERSPECTIVES ]"
        heading="Technical discourse & digital engineering."
        description="Essays, blueprints, and architectural breakdowns on modern web development, performance optimization, and technology systems."
      />

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12 pb-6 border-b border-white/[0.08]">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-mono rounded-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.3)]'
                  : 'text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search dispatches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs font-mono bg-[#08080A] border border-white/10 text-white placeholder-zinc-500 rounded-sm focus:outline-none focus:border-cyan-400/80 transition-colors"
          />
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onRead={setSelectedPost} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center cyber-card p-12 rounded-sm border border-white/10">
          <p className="font-mono text-sm text-zinc-400 mb-4">// NO MATCHING DISPATCHES LOCATED //</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            RESET ALL FILTERS
          </button>
        </div>
      )}

      <ArticleReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
};
