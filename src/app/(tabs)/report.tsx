import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/context/auth-context';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function ReportScreen() {
  const { isLoggedIn } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, [isLoggedIn])
  );

  if (!isLoggedIn) return null;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title">报告</ThemedText>
        <ThemedText themeColor="textSecondary">查看你的数据报告</ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    paddingBottom: BottomTabInset,
  },
});
