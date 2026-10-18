import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import { UserPlus, CalendarPlus, BarChart3 } from 'lucide-react-native';
import { QuickAction } from '../../types';

const iconMap: Record<string, React.FC<{ size: number; color: string }>> = {
  'user-plus': UserPlus,
  'calendar-plus': CalendarPlus,
  'bar-chart-3': BarChart3,
};

interface QuickActionButtonProps {
  action: QuickAction;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({ action }) => {
  const IconComponent = iconMap[action.icon];

  const handlePress = () => {
    Alert.alert(
      action.label,
      `The "${action.label}" feature will be available in a future update.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <TouchableOpacity
      className="flex-1 bg-white rounded-2xl p-4 items-center border border-neutral-200"
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityLabel={action.label}
      accessibilityRole="button"
    >
      <View
        className="rounded-xl p-3 mb-2"
        style={{ backgroundColor: action.color + '15' }}
      >
        {IconComponent && <IconComponent size={22} color={action.color} />}
      </View>
      <Text className="text-xs font-medium text-neutral-700">{action.label}</Text>
    </TouchableOpacity>
  );
};
