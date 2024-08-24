import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './routes';

function App() {


  return (
    <NavigationContainer>
      <StackNavigate/>
    </NavigationContainer>
  );
}

export default App;




