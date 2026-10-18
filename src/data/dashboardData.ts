import { Appointment, DashboardMetric, RecentActivity, QuickAction, MoreMenuItem } from '../types';

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: '1',
    label: "Today's Revenue",
    value: '₹8,450',
    icon: 'indian-rupee',
    trend: '+12%',
  },
  {
    id: '2',
    label: "Today's Appointments",
    value: '12',
    icon: 'calendar',
  },
  {
    id: '3',
    label: 'Total Customers',
    value: '248',
    icon: 'users',
  },
  {
    id: '4',
    label: 'Returning Customers',
    value: '72%',
    icon: 'repeat',
    trend: '+5%',
  },
];

export const upcomingAppointments: Appointment[] = [
  {
    id: '1',
    customerName: 'Rahul Sharma',
    time: '10:00 AM',
    service: 'Haircut & Styling',
    staffMember: 'Amit',
    status: 'confirmed',
  },
  {
    id: '2',
    customerName: 'Priya Patel',
    time: '11:30 AM',
    service: 'Hair Spa',
    staffMember: 'Neha',
    status: 'confirmed',
  },
  {
    id: '3',
    customerName: 'Vikram Singh',
    time: '1:00 PM',
    service: 'Beard Trim & Shave',
    staffMember: 'Amit',
    status: 'pending',
  },
  {
    id: '4',
    customerName: 'Ananya Desai',
    time: '2:30 PM',
    service: 'Facial & Cleanup',
    staffMember: 'Sneha',
    status: 'confirmed',
  },
  {
    id: '5',
    customerName: 'Karan Mehta',
    time: '4:00 PM',
    service: 'Haircut',
    staffMember: 'Amit',
    status: 'pending',
  },
];

export const recentActivities: RecentActivity[] = [
  {
    id: '1',
    description: 'New customer Aisha Khan registered',
    time: '2 min ago',
    type: 'customer',
  },
  {
    id: '2',
    description: 'Appointment completed for Rahul Sharma',
    time: '15 min ago',
    type: 'appointment',
  },
  {
    id: '3',
    description: 'Loyalty reward earned by Priya Patel — 50 points',
    time: '1 hr ago',
    type: 'loyalty',
  },
  {
    id: '4',
    description: 'New booking by Vikram Singh',
    time: '2 hr ago',
    type: 'appointment',
  },
];

export const quickActions: QuickAction[] = [
  {
    id: '1',
    label: 'Add Customer',
    icon: 'user-plus',
    color: '#6B8F71',
  },
  {
    id: '2',
    label: 'New Booking',
    icon: 'calendar-plus',
    color: '#3B82F6',
  },
  {
    id: '3',
    label: 'View Reports',
    icon: 'bar-chart-3',
    color: '#F59E0B',
  },
];

export const moreMenuItems: MoreMenuItem[] = [
  { id: '1', label: 'Services', icon: 'scissors', subtitle: 'Manage your salon services' },
  { id: '2', label: 'Staff', icon: 'users', subtitle: 'Manage your team' },
  { id: '3', label: 'Loyalty Wallet', icon: 'wallet', subtitle: 'Customer loyalty program' },
  { id: '4', label: 'Reminders', icon: 'bell', subtitle: 'Smart notifications' },
  { id: '5', label: 'Reports', icon: 'bar-chart-3', subtitle: 'Business analytics' },
  { id: '6', label: 'Settings', icon: 'settings', subtitle: 'App preferences' },
];
