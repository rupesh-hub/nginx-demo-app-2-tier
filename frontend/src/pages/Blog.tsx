import { Server, Cloud, Code } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        console.log("API Response:", response.data);
        setBlogs(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Define an array of icons
  const icons = [Server, Cloud, Code];

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-4">DevOps Blogs</h1>
      <p className="text-gray-700 mb-6">
        Explore insights on DevOps practices, tools, and industry trends.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Cloud size={80} className="text-gray-600" />
          </div>
        ) : (
          Array.isArray(blogs) &&
          blogs.map((blog, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={blog?.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Icon size={40} className="text-gray-600 mb-4" />
                <h2 className="text-lg font-medium">{blog?.title}</h2>
                <p className="text-gray-700 text-sm">{blog?.content}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
