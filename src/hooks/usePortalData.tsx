import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

interface Subscription {
  id: string;
  plan_name: string;
  billing_frequency: string;
  monthly_cost: number;
  next_billing_date: string | null;
  payment_method: string | null;
  payment_last_four: string | null;
  status: string;
}

interface Property {
  id: string;
  name: string;
  address: string | null;
  city: string | null;
  country: string | null;
}

interface Device {
  id: string;
  device_id: string;
  name: string;
  status: string;
  installation_date: string | null;
  last_online: string | null;
  property_id: string | null;
  property?: Property | null;
}

interface Order {
  id: string;
  order_number: string;
  order_date: string;
  status: string;
  total: number;
  items: unknown;
  invoice_url: string | null;
}

interface Service {
  id: string;
  service_name: string;
  status: string;
  monthly_cost: number | null;
  activated_at: string | null;
}

interface Return {
  id: string;
  ticket_number: string;
  reason: string;
  request_type: string;
  status: string;
  notes: string | null;
  created_at: string;
  device_id: string | null;
  order_id: string | null;
}

export function useSubscription() {
  const { profile } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("company_id", profile.company_id)
        .single();

      if (error) {
        console.error("Error fetching subscription:", error);
      } else {
        setSubscription(data);
      }
      setLoading(false);
    };

    fetchSubscription();
  }, [profile?.company_id]);

  return { subscription, loading };
}

export function useProperties() {
  const { profile } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("company_id", profile.company_id);

      if (error) {
        console.error("Error fetching properties:", error);
      } else {
        setProperties(data || []);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [profile?.company_id]);

  return { properties, loading };
}

export function useDevices() {
  const { profile } = useAuth();
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchDevices = async () => {
      const { data, error } = await supabase
        .from("devices")
        .select(`
          *,
          property:properties(*)
        `)
        .eq("company_id", profile.company_id);

      if (error) {
        console.error("Error fetching devices:", error);
      } else {
        setDevices(data || []);
      }
      setLoading(false);
    };

    fetchDevices();
  }, [profile?.company_id]);

  return { devices, loading };
}

export function useOrders() {
  const { profile } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("order_date", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
      } else {
        setOrders(data || []);
      }
      setLoading(false);
    };

    fetchOrders();
  }, [profile?.company_id]);

  return { orders, loading };
}

export function useServices() {
  const { profile } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("company_id", profile.company_id);

      if (error) {
        console.error("Error fetching services:", error);
      } else {
        setServices(data || []);
      }
      setLoading(false);
    };

    fetchServices();
  }, [profile?.company_id]);

  return { services, loading };
}

export function useReturns() {
  const { profile } = useAuth();
  const [returns, setReturns] = useState<Return[]>([]);
  const [loading, setLoading] = useState(true);

  const createReturn = async (data: {
    device_id?: string;
    order_id?: string;
    reason: string;
    request_type: string;
    notes?: string;
  }) => {
    if (!profile?.company_id) return { error: new Error("No company found") };

    const ticketNumber = `RMA-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 999)
    ).padStart(3, "0")}`;

    const { data: newReturn, error } = await supabase
      .from("returns")
      .insert({
        company_id: profile.company_id,
        ticket_number: ticketNumber,
        ...data,
      })
      .select()
      .single();

    if (!error && newReturn) {
      setReturns((prev) => [newReturn, ...prev]);
    }

    return { data: newReturn, error };
  };

  useEffect(() => {
    if (!profile?.company_id) {
      setLoading(false);
      return;
    }

    const fetchReturns = async () => {
      const { data, error } = await supabase
        .from("returns")
        .select("*")
        .eq("company_id", profile.company_id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching returns:", error);
      } else {
        setReturns(data || []);
      }
      setLoading(false);
    };

    fetchReturns();
  }, [profile?.company_id]);

  return { returns, loading, createReturn };
}

export function useDashboardStats() {
  const { subscription, loading: subLoading } = useSubscription();
  const { properties, loading: propLoading } = useProperties();
  const { devices, loading: devLoading } = useDevices();

  const loading = subLoading || propLoading || devLoading;

  const stats = {
    subscription,
    propertiesCount: properties.length,
    totalDevices: devices.length,
    activeDevices: devices.filter((d) => d.status === "active").length,
    offlineDevices: devices.filter((d) => d.status === "offline").length,
    attentionDevices: devices.filter((d) => d.status === "attention").length,
  };

  return { stats, loading };
}
