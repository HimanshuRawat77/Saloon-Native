import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moreMenuItems } from '../data/dashboardData';
import { MoreMenuItemComponent } from '../components/dashboard/MoreMenuItemComponent';

export default function MoreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      <View className="px-5 pt-3 pb-4">
        <Text className="text-2xl font-bold text-neutral-900">More</Text>
      </View>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="bg-white mx-5 rounded-2xl border border-neutral-200 overflow-hidden">
          {moreMenuItems.map((item) => (
            <MoreMenuItemComponent key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
