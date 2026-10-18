import React from 'react';
import { View, Text } from 'react-native';
import { Inbox } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';

interface EmptyStateProps {
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <View className="items-center justify-center py-10 px-5">
      <Inbox size={36} color={COLORS.textMuted} />
      <Text className="text-sm text-neutral-400 mt-3 text-center">{message}</Text>
    </View>
  );
};
