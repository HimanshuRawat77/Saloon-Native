import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, actionLabel, onAction }) => {
  return (
    <View className="flex-row items-center justify-between px-5 mb-3">
      <Text className="text-lg font-semibold text-neutral-800">{title}</Text>
      {actionLabel && onAction && (
        <TouchableOpacity onPress={onAction} accessibilityLabel={actionLabel}>
          <Text className="text-sm font-medium text-primary-500">{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
