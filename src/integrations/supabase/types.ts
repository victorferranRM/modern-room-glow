export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      companies: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          id: string
          name: string
          tax_id: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          name: string
          tax_id?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          name?: string
          tax_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          city: string | null
          company: string
          country: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          inquiry_type: string
          last_name: string
          message: string | null
          phone: string | null
          property_size: string | null
          province: string | null
          status: string
          updated_at: string
        }
        Insert: {
          city?: string | null
          company: string
          country?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          inquiry_type: string
          last_name: string
          message?: string | null
          phone?: string | null
          property_size?: string | null
          province?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          city?: string | null
          company?: string
          country?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          inquiry_type?: string
          last_name?: string
          message?: string | null
          phone?: string | null
          property_size?: string | null
          province?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      devices: {
        Row: {
          company_id: string
          created_at: string
          device_id: string
          id: string
          installation_date: string | null
          last_online: string | null
          name: string
          property_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          device_id: string
          id?: string
          installation_date?: string | null
          last_online?: string | null
          name: string
          property_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          device_id?: string
          id?: string
          installation_date?: string | null
          last_online?: string | null
          name?: string
          property_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "devices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devices_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          company_id: string
          created_at: string
          id: string
          invoice_url: string | null
          items: Json
          order_date: string
          order_number: string
          status: string
          total: number
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          invoice_url?: string | null
          items?: Json
          order_date?: string
          order_number: string
          status?: string
          total?: number
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          invoice_url?: string | null
          items?: Json
          order_date?: string
          order_number?: string
          status?: string
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_id: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          address: string | null
          city: string | null
          company_id: string
          country: string | null
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_id: string
          country?: string | null
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          company_id?: string
          country?: string | null
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limit_state: {
        Row: {
          ip_key: string
          request_count: number | null
          window_start: string | null
        }
        Insert: {
          ip_key: string
          request_count?: number | null
          window_start?: string | null
        }
        Update: {
          ip_key?: string
          request_count?: number | null
          window_start?: string | null
        }
        Relationships: []
      }
      returns: {
        Row: {
          company_id: string
          created_at: string
          device_id: string | null
          id: string
          notes: string | null
          order_id: string | null
          reason: string
          request_type: string
          status: string
          ticket_number: string
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          device_id?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          reason: string
          request_type: string
          status?: string
          ticket_number: string
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          device_id?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          reason?: string
          request_type?: string
          status?: string
          ticket_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "returns_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          activated_at: string | null
          company_id: string
          created_at: string
          id: string
          monthly_cost: number | null
          service_name: string
          status: string
          updated_at: string
        }
        Insert: {
          activated_at?: string | null
          company_id: string
          created_at?: string
          id?: string
          monthly_cost?: number | null
          service_name: string
          status?: string
          updated_at?: string
        }
        Update: {
          activated_at?: string | null
          company_id?: string
          created_at?: string
          id?: string
          monthly_cost?: number | null
          service_name?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          billing_frequency: string
          company_id: string
          created_at: string
          id: string
          monthly_cost: number
          next_billing_date: string | null
          payment_last_four: string | null
          payment_method: string | null
          plan_name: string
          status: string
          updated_at: string
        }
        Insert: {
          billing_frequency?: string
          company_id: string
          created_at?: string
          id?: string
          monthly_cost?: number
          next_billing_date?: string | null
          payment_last_four?: string | null
          payment_method?: string | null
          plan_name?: string
          status?: string
          updated_at?: string
        }
        Update: {
          billing_frequency?: string
          company_id?: string
          created_at?: string
          id?: string
          monthly_cost?: number
          next_billing_date?: string | null
          payment_last_four?: string | null
          payment_method?: string | null
          plan_name?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
