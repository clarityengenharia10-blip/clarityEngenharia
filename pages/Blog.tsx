import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-10 md:py-20">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-[#004e9a] uppercase tracking-tight mb-4">Blog Clarity</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Acompanhe nossas atualizações, dicas técnicas e novidades sobre o mundo da energia ininterrupta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                            <Link to={`/blog/${post.id}`} className="block h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </Link>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-widest">
                                    <span className="text-amber-500">{post.category}</span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-slate-400">{post.date}</span>
                                </div>
                                <Link to={`/blog/${post.id}`} className="block mb-4">
                                    <h2 className="text-2xl font-bold text-slate-800 group-hover:text-[#004e9a] transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#004e9a] text-xs">
                                            {post.author.charAt(0)}
                                        </div>
                                        <span className="text-xs font-bold text-slate-500">{post.author}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{post.readTime} leitura</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
