import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, User } from "lucide-react";

const categories = ["All", "Finance", "Technology", "Africa", "Tips", "News"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cross-Border Payments in Africa",
    excerpt: "Exploring how fintech is revolutionizing the way Africans send and receive money across borders, and what this means for the continent's economy.",
    category: "Finance",
    author: "Oluwaseun Adeleke",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "🌍",
    featured: true,
  },
  {
    id: 2,
    title: "5 Tips for Safe International Money Transfers",
    excerpt: "Learn the best practices to keep your money safe when sending funds internationally. From verification to tracking, we've got you covered.",
    category: "Tips",
    author: "Amina Bello",
    date: "Jan 12, 2026",
    readTime: "4 min read",
    image: "🔒",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Exchange Rates: A Beginner's Guide",
    excerpt: "Demystifying currency exchange rates and how they affect your international transfers. Learn how to get the best rates for your money.",
    category: "Finance",
    author: "Kwesi Asante",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "💱",
    featured: false,
  },
  {
    id: 4,
    title: "Canta's New Multi-Currency Wallet Feature",
    excerpt: "Announcing our latest feature that lets you hold and manage multiple currencies in one place. Perfect for travelers and international traders.",
    category: "News",
    author: "Canta Team",
    date: "Jan 8, 2026",
    readTime: "3 min read",
    image: "💳",
    featured: false,
  },
  {
    id: 5,
    title: "How Mobile Money is Transforming African Finance",
    excerpt: "A deep dive into the mobile money revolution across Africa and how it's creating financial inclusion for millions of unbanked individuals.",
    category: "Africa",
    author: "Zainab Ibrahim",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    image: "📱",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain and the Future of Remittances",
    excerpt: "Exploring how blockchain technology could reshape the remittance industry and make cross-border transfers even faster and cheaper.",
    category: "Technology",
    author: "Oluwaseun Adeleke",
    date: "Jan 2, 2026",
    readTime: "8 min read",
    image: "⛓️",
    featured: false,
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const heroRef = useRef(null);
  const postsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const postsInView = useInView(postsRef, { once: true, margin: "-100px" });

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Insights & <span className="text-gradient">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest news, tips, and insights about cross-border 
              payments and the African fintech landscape.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gradient-primary" : "border-border"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.id}`}>
                <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-colors group">
                  <div className="grid lg:grid-cols-2">
                    <div className="h-64 lg:h-auto bg-muted flex items-center justify-center text-8xl">
                      {featuredPost.image}
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                        Featured
                      </Badge>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-16">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group h-full flex flex-col">
                      <div className="h-48 bg-muted flex items-center justify-center text-6xl">
                        {post.image}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Badge variant="outline" className="w-fit mb-3 border-border">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                          <span className="text-sm">{post.author}</span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      {regularPosts.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-4 text-center">
            <Button variant="outline" size="lg" className="border-border hover:border-primary">
              Load More Articles
            </Button>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Blog;
