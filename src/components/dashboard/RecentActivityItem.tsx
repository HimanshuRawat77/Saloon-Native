import React from 'react';
import { View, Text } from 'react-native';
import { UserPlus, CalendarCheck, Award } from 'lucide-react-native';
import { RecentActivity } from '../../types';

const typeConfig: Record<string, { icon: React.FC<{ size: number; color: string }>; bg: string; color: string }> = {
  customer: { icon: UserPlus, bg: 'bg-blue-50', color: '#3B82F6' },
  appointment: { icon: CalendarCheck, bg: 'bg-green-50', color: '#16A34A' },
  loyalty: { icon: Award, bg: 'bg-amber-50', color: '#F59E0B' },
};

interface RecentActivityItemProps {
  activity: RecentActivity;
}

export const RecentActivityItem: React.FC<RecentActivityItemProps> = ({ activity }) => {
  const config = typeConfig[activity.type];
  const IconComponent = config.icon;

  return (
    <View className="flex-row items-center px-5 py-3">
      <View className={`rounded-full p-2 mr-3 ${config.bg}`}>
        <IconComponent size={16} color={config.color} />
      </View>
      <View className="flex-1">
        <Text className="text-sm text-neutral-700">{activity.description}</Text>
        <Text className="text-xs text-neutral-400 mt-0.5">{activity.time}</Text>
      </View>
    </View>
  );
};
