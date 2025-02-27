import { FileText, Mail, UserCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Home</h1>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Blog Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <FileText size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Blogs</h2>
          <p className="text-gray-700 text-sm">
            Stay updated with the latest blog posts. Read insightful articles.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Mail size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Contact</h2>
          <p className="text-gray-700 text-sm">
            Get in touch with us. We are here to assist you.
          </p>
        </div>

        {/* About Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <UserCircle size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">About</h2>
          <p className="text-gray-700 text-sm">
            Learn more about our mission, vision, and values.
          </p>
        </div>
      </div>
    </div>
  );
}
