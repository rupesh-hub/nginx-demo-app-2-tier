import { Server, Cloud, Code } from "lucide-react";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-4">DevOps Blogs</h1>
      <p className="text-gray-700 mb-6">
        Explore insights on DevOps practices, tools, and industry trends.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* CI/CD Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Server size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">CI/CD Pipeline</h2>
          <p className="text-gray-700 text-sm">
            Learn how Continuous Integration and Deployment streamline software delivery.
          </p>
        </div>

        {/* Cloud & Automation Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Cloud size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Cloud & Automation</h2>
          <p className="text-gray-700 text-sm">
            Discover how cloud platforms enhance DevOps automation.
          </p>
        </div>

        {/* Infrastructure as Code Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Code size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Infrastructure as Code</h2>
          <p className="text-gray-700 text-sm">
            Explore tools like Terraform and Ansible for managing infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
