import { useState } from "react";
import "../landing_page.css";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog" },
    { id: 2, title: "Second Blog" },
  ]);
  
  const addBlog = () => {
    const newBlog = { id: blogs.length + 1, title: `Blog ${blogs.length + 1}` };
    setBlogs([...blogs, newBlog]);
  };

  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="title">Admin Panel</h2>
        <button onClick={() => setActiveTab("dashboard")} className="sidebar-btn">Dashboard</button>
        <button onClick={() => setActiveTab("blogs")} className="sidebar-btn">Blogs</button>
      </div>

      <div className="main-content">
        {activeTab === "dashboard" && <h1 className="header">Welcome to the Dashboard</h1>}
        
        {activeTab === "blogs" && (
          <div>
            <h1 className="header">Manage Blogs</h1>
            <button onClick={addBlog} className="add-btn">Add Blog</button>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id} className="blog-item">
                  {blog.title}
                  <button onClick={() => removeBlog(blog.id)} className="remove-btn">Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
