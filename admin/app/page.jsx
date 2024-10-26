"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, MessageSquare, LogOut } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AdminPanel() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState('all')
  const requestsPerPage = 10
  const router = useRouter()

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch('/api/getUsers')
        if (!res.ok) throw new Error('Failed to fetch user requests')

        const data = await res.json()
        if (!Array.isArray(data)) throw new Error('Unexpected data format')

        setRequests(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchRequests()
  }, [])

  const filteredRequests = requests.filter(request =>
    (statusFilter === 'all' || request.status === statusFilter) &&
    Object.values(request).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  const indexOfLastRequest = currentPage * requestsPerPage
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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

  const handleViewRequest = (request) => {
    const queryParams = new URLSearchParams(request).toString()
    router.push(`/admin/request/details?${queryParams}`)
  }

  // Logout function
  const logout = async () => {
    try {
      // Make a request to your logout API endpoint
      const res = await fetch('/api/logout', { method: 'POST' })
      if (!res.ok) throw new Error('Failed to logout')

      // Redirect to the login page after successful logout
      router.push('/login')
    } catch (err) {
      console.error(err)
      // Optionally handle error feedback to the user
    }
  }

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
          <Button variant="outline" className="w-full flex items-center justify-center" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">User Requests</h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search requests..."
                className="pl-10 pr-4 py-2 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentRequests.map((request) => (
                  <TableRow key={request._id}>
                    <TableCell className="font-medium">{request._id?.slice(-6)}</TableCell>
                    <TableCell>{request.firstName} {request.lastName}</TableCell>
                    <TableCell className="max-w-xs truncate">{request.subject}</TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell>{new Date(request.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewRequest(request)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                </PaginationItem>
                {[...Array(Math.ceil(filteredRequests.length / requestsPerPage))].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink onClick={() => paginate(i + 1)} isActive={currentPage === i + 1}>
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredRequests.length / requestsPerPage)} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </main>
    </div>
  )
}
