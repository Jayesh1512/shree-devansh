"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, LogOut, Menu, X, Send } from 'lucide-react';

export default function Newsletter() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSendNewsletter = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch('/api/sendNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send newsletter');
      }

      // Reset form and show success message
      setSubject('');
      setMessage('');
      alert('Newsletter sent successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSending(false);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      router.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <aside className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link href="/admin" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MessageSquare className="w-5 h-5 mr-2" />
            User Requests
          </Link>
          <Link href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
            <Send className="w-5 h-5 mr-2" />
            Send Newsletter
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto md:ml-64">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Newsletter</h2>
        <form onSubmit={handleSendNewsletter} 
              className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full"
              placeholder="Enter newsletter subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full h-64"
              placeholder="Enter newsletter message"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" disabled={isSending} className="w-full">
            {isSending ? 'Sending...' : 'Send Newsletter'}
          </Button>
        </form>
      </main>
    </div>
  );
}