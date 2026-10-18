import React from 'react';
import { View, Text } from 'react-native';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle }) => {
  return (
    <View className="px-5 pt-3 pb-4">
      <Text className="text-2xl font-bold text-neutral-900">{title}</Text>
      {subtitle && (
        <Text className="text-sm text-neutral-500 mt-1">{subtitle}</Text>
      )}
    </View>
  );
};
