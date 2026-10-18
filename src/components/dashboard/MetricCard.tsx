import React from 'react';
import { View, Text } from 'react-native';
import { IndianRupee, Calendar, Users, Repeat } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';
import { DashboardMetric } from '../../types';

const iconMap: Record<string, React.FC<{ size: number; color: string }>> = {
  'indian-rupee': IndianRupee,
  calendar: Calendar,
  users: Users,
  repeat: Repeat,
};

interface MetricCardProps {
  metric: DashboardMetric;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const IconComponent = iconMap[metric.icon];

  return (
    <View className="bg-white rounded-2xl p-4 flex-1 min-w-[45%] border border-neutral-200">
      <View className="flex-row items-center justify-between mb-2">
        <View className="bg-primary-50 rounded-xl p-2">
          {IconComponent && <IconComponent size={18} color={COLORS.primary} />}
        </View>
        {metric.trend && (
          <Text className="text-xs font-medium text-green-600">{metric.trend}</Text>
        )}
      </View>
      <Text className="text-2xl font-bold text-neutral-900 mt-1">{metric.value}</Text>
      <Text className="text-xs text-neutral-500 mt-1">{metric.label}</Text>
    </View>
  );
};
