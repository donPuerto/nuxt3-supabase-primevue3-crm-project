export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          deleted_at: string | null
          first_name: string | null
          id: string
          is_active: boolean | null
          is_deleted: boolean | null
          job_title: string | null
          last_name: string | null
          updated_at: string | null
          user_status: Database['public']['Enums']['user_status'] | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          deleted_at?: string | null
          first_name?: string | null
          id: string
          is_active?: boolean | null
          is_deleted?: boolean | null
          job_title?: string | null
          last_name?: string | null
          updated_at?: string | null
          user_status?: Database['public']['Enums']['user_status'] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          deleted_at?: string | null
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          is_deleted?: boolean | null
          job_title?: string | null
          last_name?: string | null
          updated_at?: string | null
          user_status?: Database['public']['Enums']['user_status'] | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
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
      user_status: 'Active' | 'Away' | 'Do not disturb' | 'Invincible'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
