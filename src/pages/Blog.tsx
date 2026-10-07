import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BlogCard } from '../components/BlogCard';
import { ArticleReaderModal } from '../components/ArticleReaderModal';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';

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
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
      <SectionHeading
        label="Journal"
        heading="Perspectives on modern web technology."
        description="Practical articles on web development, digital strategy, and building for the web in the Philippines."
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12 pb-6 border-b border-white/[0.07]">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 text-[13px] rounded-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-black font-medium'
                  : 'text-[#6B6B6B] hover:text-white border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-52 px-3.5 py-1.5 text-[13px] bg-[#111] border border-white/[0.08] text-white placeholder-[#444] rounded-sm focus:outline-none focus:border-white/25 transition-colors"
        />
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onRead={setSelectedPost} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-[#6B6B6B] mb-4">No articles match your filters.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-sm text-white underline underline-offset-2"
          >
            Reset filters
          </button>
        </div>
      )}

      <ArticleReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
};
