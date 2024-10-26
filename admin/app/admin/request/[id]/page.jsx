"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageSquare, LogOut } from 'lucide-react'

export default function RequestDetails() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Extracting query parameters
  const request = {
    _id: searchParams.get('_id'),
    firstName: searchParams.get('firstName'),
    lastName: searchParams.get('lastName'),
    email: searchParams.get('email'),
    phone: searchParams.get('phone'),
    subject: searchParams.get('subject'),
    status: searchParams.get('status'),
    date: searchParams.get('date'),
    message: searchParams.get('message'),
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>
      case 'in-progress':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">In Progress</Badge>
      case 'resolved':
        return <Badge variant="outline" className="bg-green-100 text-green-800">Resolved</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  if (!request._id) return <div className="flex justify-center items-center h-screen">No request data available</div>

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
            <MessageSquare className="w-5 h-5 mr-2" />
            User Requests
          </a>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Button 
          variant="outline" 
          onClick={() => router.push('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Requests
        </Button>

        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Request Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">ID:</span>
                <span>{request._id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Name:</span>
                <span>{request.firstName} {request.lastName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Email:</span>
                <span>{request.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Phone:</span>
                <span>{request.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Subject:</span>
                <span>{request.subject}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Status:</span>
                {getStatusBadge(request.status)}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Date:</span>
                <span>{new Date(request.date).toLocaleString()}</span>
              </div>
              <div>
                <span className="font-semibold">Message:</span>
                <p className="mt-2 whitespace-pre-wrap">{request.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
