import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Package,
  Download,
  Eye,
  ChevronRight,
  ShoppingBag,
  Calendar,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

// Mock data
const orders = [
  {
    id: "ORD-2026-0042",
    date: "2026-01-10",
    items: [
      { name: "Roomonitor Pro Device", quantity: 3, price: "€149.70" },
      { name: "Installation Kit", quantity: 3, price: "€29.70" },
    ],
    total: "€179.40",
    status: "delivered",
    trackingNumber: "ES123456789",
  },
  {
    id: "ORD-2025-0038",
    date: "2025-11-22",
    items: [
      { name: "Roomonitor Pro Device", quantity: 2, price: "€99.80" },
    ],
    total: "€99.80",
    status: "delivered",
    trackingNumber: "ES987654321",
  },
  {
    id: "ORD-2025-0031",
    date: "2025-09-15",
    items: [
      { name: "Roomonitor Pro Device", quantity: 5, price: "€249.50" },
      { name: "Premium Installation Kit", quantity: 5, price: "€74.50" },
      { name: "Extended Warranty (2 years)", quantity: 5, price: "€49.50" },
    ],
    total: "€373.50",
    status: "delivered",
    trackingNumber: "ES456789123",
  },
  {
    id: "ORD-2025-0024",
    date: "2025-07-03",
    items: [
      { name: "Replacement Power Adapter", quantity: 1, price: "€19.90" },
    ],
    total: "€19.90",
    status: "delivered",
    trackingNumber: "ES321654987",
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "delivered":
      return { label: "Delivered", className: "bg-success/10 text-success" };
    case "shipped":
      return { label: "Shipped", className: "bg-primary/10 text-primary" };
    case "processing":
      return { label: "Processing", className: "bg-warning/10 text-warning" };
    case "pending":
      return { label: "Pending", className: "bg-muted text-muted-foreground" };
    default:
      return { label: "Unknown", className: "bg-muted text-muted-foreground" };
  }
};

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Orders & Purchase History</h1>
        <p className="text-muted-foreground">
          View your order history and download invoices.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Orders List */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const statusConfig = getStatusConfig(order.status);

            return (
              <Card key={order.id} className="hover:shadow-soft transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Order Info */}
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-semibold">{order.id}</h3>
                            <Badge className={statusConfig.className}>
                              {statusConfig.label}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(order.date).toLocaleDateString('en-GB', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {order.items.length} item{order.items.length > 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>

                      {/* Total & Actions */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Total</p>
                          <p className="text-lg font-semibold">{order.total}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No orders found</h3>
            <p className="text-muted-foreground text-center mt-1 max-w-sm">
              {searchQuery
                ? "Try adjusting your search."
                : "You haven't made any purchases yet."}
            </p>
            {!searchQuery && (
              <Button className="mt-4" asChild>
                <a href="/checkout" target="_blank" rel="noopener noreferrer">
                  Browse Products
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>{selectedOrder?.id}</DialogDescription>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge className={getStatusConfig(selectedOrder.status).className}>
                  {getStatusConfig(selectedOrder.status).label}
                </Badge>
              </div>

              {/* Items */}
              <div>
                <h4 className="font-medium mb-3">Items</h4>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="text-lg font-semibold">{selectedOrder.total}</span>
              </div>

              {/* Tracking */}
              {selectedOrder.trackingNumber && (
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">Tracking Number</p>
                  <p className="font-mono text-sm">{selectedOrder.trackingNumber}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
