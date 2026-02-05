import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-300 mb-4">Post não encontrado</h1>
                    <Link to="/blog" className="text-[#004e9a] font-bold hover:underline">Voltar para o Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Header Image */}
            <div className="h-[400px] md:h-[500px] w-full relative overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 text-white">
                    <div className="max-w-4xl mx-auto">
                        <span className="bg-amber-400 text-[#004e9a] px-3 py-1 rounded font-bold text-xs uppercase tracking-widest mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm font-bold opacity-80">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>Por {post.author}</span>
                            <span>•</span>
                            <span>{post.readTime} de leitura</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <div
                    className="prose prose-lg prose-slate hover:prose-a:text-[#004e9a] prose-headings:font-black prose-headings:text-[#004e9a]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-10 border-t border-slate-200">
                    <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-[#004e9a] hover:text-amber-500 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar para o Blog
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
