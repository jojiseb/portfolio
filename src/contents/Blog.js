import React from 'react';

const posts = [
  // { slug: 'my-first-post', title: 'My First Post', date: 'April 2026', excerpt: 'A short description...' },
];

function Blog() {
  return (
    <section id="blog">
      <p className="section-label">Blog</p>
      {posts.length === 0 ? (
        <div className="blog-empty">
          <p className="blog-empty-title">Nothing here yet.</p>
          <p className="blog-empty-sub">
            Writing takes time. Something is brewing — check back soon.
          </p>
        </div>
      ) : (
        <div className="blog-list">
          {posts.map(post => (
            <article key={post.slug} className="blog-item">
              <p className="blog-date">{post.date}</p>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-read">Read →</span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
