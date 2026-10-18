import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell } from 'lucide-react-native';
import { COLORS } from '../constants/theme';
import {
  dashboardMetrics,
  upcomingAppointments,
  recentActivities,
  quickActions,
} from '../data/dashboardData';
import { MetricCard } from '../components/dashboard/MetricCard';
import { QuickActionButton } from '../components/dashboard/QuickActionButton';
import { AppointmentCard } from '../components/dashboard/AppointmentCard';
import { RecentActivityItem } from '../components/dashboard/RecentActivityItem';
import { SectionHeader } from '../components/common/SectionHeader';
import { EmptyState } from '../components/common/EmptyState';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50" edges={['top']}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <Text className="text-2xl font-bold text-neutral-900">
                Good morning, Himanshu
              </Text>
              <Text className="text-sm text-neutral-500 mt-1">
                Here's what's happening at your salon today.
              </Text>
              <View className="bg-primary-50 self-start px-3 py-1 rounded-full mt-2">
                <Text className="text-xs font-medium text-primary-700">
                  The Grooming Studio
                </Text>
              </View>
            </View>
            <TouchableOpacity
              className="bg-white rounded-full p-2.5 border border-neutral-200 ml-3"
              accessibilityLabel="Notifications"
              accessibilityRole="button"
              onPress={() => {}}
            >
              <Bell size={20} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Overview */}
        <View className="mt-5">
          <SectionHeader title="Today's Overview" />
          <View className="flex-row flex-wrap gap-3 px-5">
            {dashboardMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mt-6">
          <SectionHeader title="Quick Actions" />
          <View className="flex-row gap-3 px-5">
            {quickActions.map((action) => (
              <QuickActionButton key={action.id} action={action} />
            ))}
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View className="mt-6">
          <SectionHeader title="Upcoming Appointments" actionLabel="See All" onAction={() => {}} />
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))
          ) : (
            <EmptyState message="No upcoming appointments for today." />
          )}
        </View>

        {/* Recent Activity */}
        <View className="mt-6">
          <SectionHeader title="Recent Activity" />
          {recentActivities.length > 0 ? (
            <View className="bg-white mx-5 rounded-2xl border border-neutral-200 overflow-hidden">
              {recentActivities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <RecentActivityItem activity={activity} />
                  {index < recentActivities.length - 1 && (
                    <View className="h-px bg-neutral-100 mx-5" />
                  )}
                </React.Fragment>
              ))}
            </View>
          ) : (
            <EmptyState message="No recent activity." />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
