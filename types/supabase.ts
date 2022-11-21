export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      drivers: {
        Row: {
          id: number
          name: string | null
          abbr: string | null
          updated: string | null
          image: string | null
          nationality: string | null
          country: Json | null
          birthdate: string | null
          birthplace: string | null
          number: number | null
          grands_prix_entered: number | null
          world_championships: number | null
          podiums: number | null
          highest_race_finish: Json | null
          career_points: number | null
          teams: Json[] | null
          highest_grid_position: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          abbr?: string | null
          updated?: string | null
          image?: string | null
          nationality?: string | null
          country?: Json | null
          birthdate?: string | null
          birthplace?: string | null
          number?: number | null
          grands_prix_entered?: number | null
          world_championships?: number | null
          podiums?: number | null
          highest_race_finish?: Json | null
          career_points?: number | null
          teams?: Json[] | null
          highest_grid_position?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          abbr?: string | null
          updated?: string | null
          image?: string | null
          nationality?: string | null
          country?: Json | null
          birthdate?: string | null
          birthplace?: string | null
          number?: number | null
          grands_prix_entered?: number | null
          world_championships?: number | null
          podiums?: number | null
          highest_race_finish?: Json | null
          career_points?: number | null
          teams?: Json[] | null
          highest_grid_position?: number | null
        }
      }
      "ranking/drivers": {
        Row: {
          position: number
          points: number | null
          wins: number | null
          behind: number | null
          season: number | null
          driver: number | null
          team: number | null
          updated: string | null
        }
        Insert: {
          position?: number
          points?: number | null
          wins?: number | null
          behind?: number | null
          season?: number | null
          driver?: number | null
          team?: number | null
          updated?: string | null
        }
        Update: {
          position?: number
          points?: number | null
          wins?: number | null
          behind?: number | null
          season?: number | null
          driver?: number | null
          team?: number | null
          updated?: string | null
        }
      }
      saves: {
        Row: {
          id: string
          savedData: Json | null
          created_at: string | null
        }
        Insert: {
          id: string
          savedData?: Json | null
          created_at?: string | null
        }
        Update: {
          id?: string
          savedData?: Json | null
          created_at?: string | null
        }
      }
      teams: {
        Row: {
          id: number
          name: string | null
          logo: string | null
          updated: string | null
          base: string | null
          first_team_entry: number | null
          world_champtionships: number | null
          highest_race_finish: Json | null
          pole_positions: number | null
          fastest_laps: number | null
          president: string | null
          director: string | null
          technical_manager: string | null
          chassis: string | null
          engine: string | null
          tyres: string | null
          "dsaf/dasfgsa": number | null
        }
        Insert: {
          id?: number
          name?: string | null
          logo?: string | null
          updated?: string | null
          base?: string | null
          first_team_entry?: number | null
          world_champtionships?: number | null
          highest_race_finish?: Json | null
          pole_positions?: number | null
          fastest_laps?: number | null
          president?: string | null
          director?: string | null
          technical_manager?: string | null
          chassis?: string | null
          engine?: string | null
          tyres?: string | null
          "dsaf/dasfgsa"?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          logo?: string | null
          updated?: string | null
          base?: string | null
          first_team_entry?: number | null
          world_champtionships?: number | null
          highest_race_finish?: Json | null
          pole_positions?: number | null
          fastest_laps?: number | null
          president?: string | null
          director?: string | null
          technical_manager?: string | null
          chassis?: string | null
          engine?: string | null
          tyres?: string | null
          "dsaf/dasfgsa"?: number | null
        }
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
  }
}
