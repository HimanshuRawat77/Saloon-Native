import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Construction } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';

interface PlaceholderScreenProps {
  title: string;
  subtitle: string;
  message: string;
}

export const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ title, subtitle, message }) => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      <View className="px-5 pt-3 pb-4">
        <Text className="text-2xl font-bold text-neutral-900">{title}</Text>
        <Text className="text-sm text-neutral-500 mt-1">{subtitle}</Text>
      </View>
      <View className="flex-1 items-center justify-center px-8">
        <View className="bg-primary-50 rounded-full p-5 mb-5">
          <Construction size={40} color={COLORS.primary} />
        </View>
        <Text className="text-base text-neutral-600 text-center leading-6">{message}</Text>
      </View>
    </SafeAreaView>
  );
};
