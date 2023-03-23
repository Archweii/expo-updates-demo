import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

export default function App() {
  return (
    <View style={styles.container}>
      <ScText>V1.0.0</ScText>
      <StatusBar style="auto" />
    </View>
  );
}

const ScText = styled(Text)`
  font-size: 32px;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
});
