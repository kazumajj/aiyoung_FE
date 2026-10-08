import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/context/auth-context';
import { Spacing } from '@/constants/theme';

export default function LoginScreen() {
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login();
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.content}>
          <ThemedText type="title" style={styles.title}>欢迎加入青艾集</ThemedText>

          <TextInput
            style={styles.input}
            placeholder="手机号"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="密码"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          <Pressable style={styles.button} onPress={handleLogin}>
            <ThemedText style={styles.buttonText}>登录</ThemedText>
          </Pressable>

          <Pressable onPress={() => router.push('/register')}>
            <ThemedText style={styles.link}>
              没有账号？<ThemedText style={styles.linkBold}>注册</ThemedText>
            </ThemedText>
          </Pressable>
        </KeyboardAvoidingView>
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
  paddingHorizontal: Spacing.four,
  justifyContent: 'center',
  backgroundColor: '#F9F5EC',
  minHeight: '100%',
  flexGrow: 1,
  paddingTop: '30%',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  title: {
    marginBottom: Spacing.four,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: Spacing.three,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#839A43',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.two,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: Spacing.three,
    color: '#666',
  },
  linkBold: {
    color: '#1A1A1A',
    fontWeight: '600',
  },
});
