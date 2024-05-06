import React from 'react';
import { View, Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  const goToDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <View>
      <Button title="Ir a Detalle" onPress={goToDetail} />
    </View>
  );
};

const DetailScreen = () => {
  return (
    <View>
      <Text>Detalle de la pantalla</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
