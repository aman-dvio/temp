import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0a0e27] via-[#1a1d3e] to-[#2d1b4e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(236, 72, 153, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-600 mb-6">
                  This Privacy Policy describes how we collect, use, and handle your information when you use our services. 
                  We are committed to protecting your privacy and ensuring you have a positive experience on our website and 
                  in using our products and services.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and job title</li>
                  <li>Information you provide in forms, surveys, or when contacting us</li>
                  <li>Communication preferences</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized 
                  access, disclosure, alteration, and destruction. We implement appropriate technical and organizational 
                  security measures to protect your personal information.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information Sharing</h2>
                <p className="text-gray-600 mb-6">
                  We do not share, sell, rent, or trade your personal information with third parties for their promotional 
                  purposes. We may share information about you as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>With vendors, consultants, and service providers who need access to such information</li>
                  <li>In response to a request for information if required by law</li>
                  <li>To protect the rights and property of our company and users</li>
                  <li>With your consent or at your direction</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Access, update, or delete your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing of your personal information</li>
                  <li>Request transfer of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Cookies</h2>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
                  Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct 
                  your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Changes to This Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@digitaltechco.com<br />
                    <strong>Address:</strong> 12 Marina View, Asia Square Tower 2, #11-01, Singapore - 018961
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;