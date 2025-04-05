import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Web3 Applications',
      date: 'March 15, 2024',
      excerpt: 'Learn how to architect and implement scalable Web3 applications using modern best practices and tools.',
      image: '/images/blog/web3-scalability.jpg',
      link: '/blog/web3-scalability',
      readTime: '8 min read'
    },
    {
      title: 'Smart Contract Security Best Practices',
      date: 'March 1, 2024',
      excerpt: 'Essential security practices for developing and auditing smart contracts on Ethereum and other EVM-compatible chains.',
      image: '/images/blog/smart-contract-security.jpg',
      link: '/blog/smart-contract-security',
      readTime: '10 min read'
    },
    {
      title: 'DeFi Protocol Development Guide',
      date: 'February 15, 2024',
      excerpt: 'A comprehensive guide to developing decentralized finance protocols with focus on security and user experience.',
      image: '/images/blog/defi-protocol.jpg',
      link: '/blog/defi-protocol-guide',
      readTime: '12 min read'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <h2 className="section-title">Latest Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card animate-fade-in">
            <img
              src={post.image}
              alt={post.title}
              className="blog-image"
              onError={(e) => {
                e.target.src = '/images/blog-placeholder.jpg';
              }}
            />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read More
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="blog-cta">
        <a href="/blog" className="btn btn-primary">
          View All Articles
        </a>
      </div>
    </section>
  );
};

export default Blog; 