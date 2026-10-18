export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  trend?: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  time: string;
  service: string;
  staffMember: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

export interface RecentActivity {
  id: string;
  description: string;
  time: string;
  type: 'customer' | 'appointment' | 'loyalty';
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export interface MoreMenuItem {
  id: string;
  label: string;
  icon: string;
  subtitle?: string;
}
