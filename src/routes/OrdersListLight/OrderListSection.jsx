import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../../components/ui/table";
import { PlusIcon, FilterIcon, ArrowUpDownIcon, SearchIcon, CalendarIcon, CopyIcon, MoreVerticalIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const orderData = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female15-1.png"
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { text: "In Progress", color: "#3b82f6" },
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female09-1.png"
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { text: "Complete", color: "#10b981" },
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/male08-1.png"
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { text: "In Progress", color: "#3b82f6" },
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/male06-1.png"
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { text: "Approved", color: "#f59e0b" },
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female08-1.png"
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { text: "Rejected", color: "#ef4444" },
  },
  {
    id: "#CM9806",
    user: {
      name: "John Smith",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/male08-1.png"
    },
    project: "E-commerce Site",
    address: "Main Street Boston",
    date: "Feb 1, 2023",
    status: { text: "Complete", color: "#10b981" },
  },
  {
    id: "#CM9807",
    user: {
      name: "Sarah Wilson",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female15-1.png"
    },
    project: "Mobile App",
    address: "Oak Avenue Chicago",
    date: "Jan 30, 2023",
    status: { text: "In Progress", color: "#3b82f6" },
  },
  {
    id: "#CM9808",
    user: {
      name: "Mike Johnson",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/male06-1.png"
    },
    project: "Dashboard UI",
    address: "Pine Street Seattle",
    date: "Jan 28, 2023",
    status: { text: "Approved", color: "#f59e0b" },
  },
  {
    id: "#CM9809",
    user: {
      name: "Emma Davis",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female09-1.png"
    },
    project: "Portfolio Site",
    address: "Elm Street Portland",
    date: "Jan 25, 2023",
    status: { text: "Complete", color: "#10b981" },
  },
  {
    id: "#CM9810",
    user: {
      name: "Alex Brown",
      avatar: "https://c.animaapp.com/mfts78v1OkF6JP/img/female08-1.png"
    },
    project: "Blog Platform",
    address: "Cedar Lane Denver",
    date: "Jan 20, 2023",
    status: { text: "Rejected", color: "#ef4444" },
  }
];

export const OrderListSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return '#10b981'; // green
      case 'in progress':
        return '#3b82f6'; // blue
      case 'approved':
        return '#f59e0b'; // yellow
      case 'rejected':
        return '#ef4444'; // red
      default:
        return '#6b7280'; // gray
    }
  };

  return (
    <section className="flex flex-col w-full p-6 space-y-6 bg-background">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">Order List</h1>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 bg-[#f7f9fb] dark:bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-auto hover:bg-accent transition-colors"
          >
            <ArrowUpDownIcon className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-auto hover:bg-accent transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-gray-700/60 rounded-lg border border-border">
          <SearchIcon className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0 w-32"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">Order ID</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">User</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">Project</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">Address</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">Date</TableHead>
              <TableHead className="text-xs text-muted-foreground font-medium px-4 py-3">Status</TableHead>
              <TableHead className="w-12 px-4 py-3"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderData.map((order, index) => (
              <TableRow
                key={order.id}
                className="border-b border-border/50 hover:bg-accent/50 transition-colors"
              >
                <TableCell className="px-4 py-3">
                  <div className="text-xs text-foreground font-medium">
                    {order.id}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={order.user.avatar} alt={order.user.name} />
                      <AvatarFallback className="text-xs">
                        {order.user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-foreground">
                      {order.user.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="text-xs text-foreground">
                    {order.project}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-foreground">
                      {order.address}
                    </span>
                    {index === 4 && (
                      <CopyIcon className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-foreground">
                      {order.date}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getStatusColor(order.status.text) }}
                    />
                    <span 
                      className="text-xs font-medium"
                      style={{ color: getStatusColor(order.status.text) }}
                    >
                      {order.status.text}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-1 h-auto hover:bg-accent transition-colors"
                  >
                    <MoreVerticalIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 h-auto hover:bg-accent transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>
        
        {[1, 2, 3, 4, 5].map((number, index) => (
          <Button
            key={number}
            variant={index === 0 ? "default" : "ghost"}
            size="sm"
            className={`w-8 h-8 p-0 ${index === 0 ? 'bg-accent' : 'hover:bg-accent'} transition-colors`}
          >
            {number}
          </Button>
        ))}
        
        <Button
          variant="ghost"
          size="sm"
          className="p-2 h-auto hover:bg-accent transition-colors"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};
