import React from 'react';
import { View, Text } from 'react-native';
import { Clock, User, Scissors } from 'lucide-react-native';
import { COLORS } from '../../constants/theme';
import { Appointment } from '../../types';

interface AppointmentCardProps {
  appointment: Appointment;
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  confirmed: { bg: 'bg-green-50', text: 'text-green-700', label: 'Confirmed' },
  pending: { bg: 'bg-amber-50', text: 'text-amber-700', label: 'Pending' },
  completed: { bg: 'bg-blue-50', text: 'text-blue-700', label: 'Completed' },
  cancelled: { bg: 'bg-red-50', text: 'text-red-700', label: 'Cancelled' },
};

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const status = statusStyles[appointment.status];

  return (
    <View className="bg-white rounded-2xl p-4 mx-5 mb-3 border border-neutral-200">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-base font-semibold text-neutral-900">
          {appointment.customerName}
        </Text>
        <View className={`px-2.5 py-1 rounded-full ${status.bg}`}>
          <Text className={`text-xs font-medium ${status.text}`}>{status.label}</Text>
        </View>
      </View>
      <View className="flex-row items-center flex-wrap gap-4">
        <View className="flex-row items-center">
          <Clock size={14} color={COLORS.textSecondary} />
          <Text className="text-sm text-neutral-500 ml-1.5">{appointment.time}</Text>
        </View>
        <View className="flex-row items-center">
          <Scissors size={14} color={COLORS.textSecondary} />
          <Text className="text-sm text-neutral-500 ml-1.5">{appointment.service}</Text>
        </View>
        <View className="flex-row items-center">
          <User size={14} color={COLORS.textSecondary} />
          <Text className="text-sm text-neutral-500 ml-1.5">{appointment.staffMember}</Text>
        </View>
      </View>
    </View>
  );
};
