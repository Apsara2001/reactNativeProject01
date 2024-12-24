import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider,Text,Divider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text varient="headingLarge">Heading Large</Text>
        <Text varient="bodyMedium" style={styles.body}>You are beautiful You are beautiful You are beautiful You are beautiful
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful 
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful
        You are beautiful You are beautiful You are beautiful
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    padding:5,
    textAlign:'justify'
  }
});
