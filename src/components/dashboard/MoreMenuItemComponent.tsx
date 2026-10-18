import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import { Scissors, Users, Wallet, Bell, BarChart3, Settings, ChevronRight } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';
import { MoreMenuItem as MoreMenuItemType } from '../../types';

const iconMap: Record<string, React.FC<{ size: number; color: string }>> = {
  scissors: Scissors,
  users: Users,
  wallet: Wallet,
  bell: Bell,
  'bar-chart-3': BarChart3,
  settings: Settings,
};

interface MoreMenuItemProps {
  item: MoreMenuItemType;
}

export const MoreMenuItemComponent: React.FC<MoreMenuItemProps> = ({ item }) => {
  const IconComponent = iconMap[item.icon];

  const handlePress = () => {
    Alert.alert(
      item.label,
      `The "${item.label}" feature will be available in a future update.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <TouchableOpacity
      className="flex-row items-center bg-white px-5 py-4 border-b border-neutral-100"
      onPress={handlePress}
      activeOpacity={0.6}
      accessibilityLabel={item.label}
      accessibilityRole="button"
    >
      <View className="bg-neutral-100 rounded-xl p-2.5 mr-4">
        {IconComponent && <IconComponent size={20} color={COLORS.textSecondary} />}
      </View>
      <View className="flex-1">
        <Text className="text-base font-medium text-neutral-800">{item.label}</Text>
        {item.subtitle && (
          <Text className="text-xs text-neutral-400 mt-0.5">{item.subtitle}</Text>
        )}
      </View>
      <ChevronRight size={18} color={COLORS.textMuted} />
    </TouchableOpacity>
  );
};
