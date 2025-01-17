import { Button, StyleSheet, View } from 'react-native';

const OnboardingScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Onboarding content */}
      <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    padding: 10,
  }
});