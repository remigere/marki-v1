export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      customer: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          subscription_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          subscription_id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          subscription_id?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          created_at: string | null
          dietaryPreferences: string | null
          display_name: string | null
          email: string | null
          id: string
          image_url: string | null
          phone_number: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          dietaryPreferences?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          phone_number?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          dietaryPreferences?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          phone_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          customer_id: string | null
          customer_name: string | null
          delivery_address: string | null
          latest_invoice_id: string | null
          livemode: boolean | null
          metadata: Json | null
          phoneNumber: number | null
          plan_id: string | null
          quantity: number | null
          status: string
          user_id: string
        }
        Insert: {
          customer_id?: string | null
          customer_name?: string | null
          delivery_address?: string | null
          latest_invoice_id?: string | null
          livemode?: boolean | null
          metadata?: Json | null
          phoneNumber?: number | null
          plan_id?: string | null
          quantity?: number | null
          status: string
          user_id: string
        }
        Update: {
          customer_id?: string | null
          customer_name?: string | null
          delivery_address?: string | null
          latest_invoice_id?: string | null
          livemode?: boolean | null
          metadata?: Json | null
          phoneNumber?: number | null
          plan_id?: string | null
          quantity?: number | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          allergies: string | null
          avatar_url: string | null
          date: string | null
          delivery_address: string | null
          email: string
          email_preferences: string | null
          feedback: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          preferences: string | null
        }
        Insert: {
          allergies?: string | null
          avatar_url?: string | null
          date?: string | null
          delivery_address?: string | null
          email: string
          email_preferences?: string | null
          feedback?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
          preferences?: string | null
        }
        Update: {
          allergies?: string | null
          avatar_url?: string | null
          date?: string | null
          delivery_address?: string | null
          email?: string
          email_preferences?: string | null
          feedback?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          preferences?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      update_allergies: {
        Args: {
          user_id: string
          new_allergies: string
        }
        Returns: undefined
      }
      update_date: {
        Args: {
          user_id: string
          new_date: string
        }
        Returns: undefined
      }
      update_delivery_address: {
        Args: {
          user_id: string
          new_address: string
        }
        Returns: undefined
      }
      update_email_preferences: {
        Args: {
          user_id: string
          new_email_preferences: string
        }
        Returns: undefined
      }
      update_feedback: {
        Args: {
          user_id: string
          new_feedback: string
        }
        Returns: undefined
      }
      update_phone_number: {
        Args: {
          user_id: string
          new_phone_number: string
        }
        Returns: undefined
      }
      update_preferences: {
        Args: {
          user_id: string
          new_preferences: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
