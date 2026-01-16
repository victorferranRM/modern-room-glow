import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  RotateCcw,
  Package,
  Cpu,
  Check,
  ChevronRight,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Mock data
const devices = [
  { id: "RM-001-ABC", name: "Living Room Monitor", property: "Apartment 12A - Barcelona" },
  { id: "RM-002-DEF", name: "Bedroom Monitor", property: "Apartment 12A - Barcelona" },
  { id: "RM-003-GHI", name: "Main Area Sensor", property: "Villa Costa - Mallorca" },
  { id: "RM-004-JKL", name: "Entrance Monitor", property: "Studio Downtown - Madrid" },
];

const recentOrders = [
  { id: "ORD-2026-0042", date: "Jan 10, 2026", items: "3x Pro Device, 3x Installation Kit" },
  { id: "ORD-2025-0038", date: "Nov 22, 2025", items: "2x Pro Device" },
];

const existingRequests = [
  {
    id: "RMA-2026-001",
    type: "Replacement",
    device: "RM-005-MNO",
    status: "processing",
    date: "Jan 12, 2026",
  },
];

const requestReasons = [
  { value: "defective", label: "Device not working / Defective" },
  { value: "damaged", label: "Device damaged during shipping" },
  { value: "wrong-item", label: "Received wrong item" },
  { value: "spare-parts", label: "Need spare parts" },
  { value: "upgrade", label: "Upgrade to newer model" },
  { value: "other", label: "Other reason" },
];

const requestTypes = [
  { value: "replacement", label: "Request Replacement", description: "We'll send a new device" },
  { value: "return", label: "Return for Refund", description: "Return the device for a refund" },
  { value: "spare-parts", label: "Order Spare Parts", description: "Get replacement parts" },
];

type Step = "select" | "details" | "confirmation";

export default function Returns() {
  const [step, setStep] = useState<Step>("select");
  const [selectedItem, setSelectedItem] = useState("");
  const [itemType, setItemType] = useState<"device" | "order">("device");
  const [requestType, setRequestType] = useState("");
  const [reason, setReason] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = () => {
    // Generate a mock ticket ID
    const id = `RMA-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`;
    setTicketId(id);
    setStep("confirmation");
  };

  const resetForm = () => {
    setStep("select");
    setSelectedItem("");
    setRequestType("");
    setReason("");
    setAdditionalInfo("");
    setTicketId("");
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "processing":
        return { label: "Processing", className: "bg-warning/10 text-warning" };
      case "approved":
        return { label: "Approved", className: "bg-success/10 text-success" };
      case "shipped":
        return { label: "Shipped", className: "bg-primary/10 text-primary" };
      case "completed":
        return { label: "Completed", className: "bg-success/10 text-success" };
      default:
        return { label: "Pending", className: "bg-muted text-muted-foreground" };
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Returns & Replacements</h1>
        <p className="text-muted-foreground">
          Request device replacements, returns, or spare parts.
        </p>
      </div>

      {/* Existing Requests */}
      {existingRequests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Requests</CardTitle>
            <CardDescription>Track your ongoing return and replacement requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {existingRequests.map((request) => {
                const statusConfig = getStatusConfig(request.status);
                return (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <RotateCcw className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{request.id}</p>
                          <Badge className={statusConfig.className}>{statusConfig.label}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • Device {request.device} • {request.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* New Request Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">New Request</CardTitle>
          <CardDescription>
            {step === "select" && "Select a device or order to start your request"}
            {step === "details" && "Provide details about your request"}
            {step === "confirmation" && "Your request has been submitted"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Step 1: Select Item */}
          {step === "select" && (
            <div className="space-y-6">
              {/* Item Type Selection */}
              <div className="flex gap-4">
                <Button
                  variant={itemType === "device" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => {
                    setItemType("device");
                    setSelectedItem("");
                  }}
                >
                  <Cpu className="h-4 w-4 mr-2" />
                  Select a Device
                </Button>
                <Button
                  variant={itemType === "order" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => {
                    setItemType("order");
                    setSelectedItem("");
                  }}
                >
                  <Package className="h-4 w-4 mr-2" />
                  Select an Order
                </Button>
              </div>

              {/* Device/Order Selection */}
              <div className="space-y-2">
                <Label>
                  {itemType === "device" ? "Select Device" : "Select Order"}
                </Label>
                <Select value={selectedItem} onValueChange={setSelectedItem}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Choose a ${itemType}...`} />
                  </SelectTrigger>
                  <SelectContent>
                    {itemType === "device"
                      ? devices.map((device) => (
                          <SelectItem key={device.id} value={device.id}>
                            {device.name} ({device.id}) - {device.property}
                          </SelectItem>
                        ))
                      : recentOrders.map((order) => (
                          <SelectItem key={order.id} value={order.id}>
                            {order.id} - {order.date} ({order.items})
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                disabled={!selectedItem}
                onClick={() => setStep("details")}
              >
                Continue
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Request Details */}
          {step === "details" && (
            <div className="space-y-6">
              {/* Selected Item Summary */}
              <div className="p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Selected {itemType}</p>
                <p className="font-medium">{selectedItem}</p>
              </div>

              {/* Request Type */}
              <div className="space-y-3">
                <Label>What would you like to do?</Label>
                <RadioGroup value={requestType} onValueChange={setRequestType}>
                  {requestTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        requestType === type.value ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setRequestType(type.value)}
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <div className="flex-1">
                        <Label htmlFor={type.value} className="font-medium cursor-pointer">
                          {type.label}
                        </Label>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <Label>Reason for request</Label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    {requestReasons.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="info">Additional information (optional)</Label>
                <Textarea
                  id="info"
                  placeholder="Describe the issue or provide any relevant details..."
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setStep("select")}>
                  Back
                </Button>
                <Button
                  className="flex-1"
                  disabled={!requestType || !reason}
                  onClick={handleSubmit}
                >
                  Submit Request
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === "confirmation" && (
            <div className="flex flex-col items-center py-8">
              <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold">Request Submitted!</h3>
              <p className="text-muted-foreground text-center mt-1">
                Your request has been received and is being processed.
              </p>

              <div className="mt-6 p-4 rounded-lg bg-muted/50 w-full max-w-sm text-center">
                <p className="text-sm text-muted-foreground">Your ticket reference</p>
                <p className="text-xl font-mono font-semibold mt-1">{ticketId}</p>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>You'll receive an email confirmation shortly</span>
              </div>

              <Button className="mt-6" onClick={resetForm}>
                Submit Another Request
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Help Card */}
      <Card className="bg-muted/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Need Help?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                If you're experiencing issues with your devices or have questions about the return
                process, our support team is here to help.
              </p>
              <Button variant="link" className="px-0 mt-2">
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
