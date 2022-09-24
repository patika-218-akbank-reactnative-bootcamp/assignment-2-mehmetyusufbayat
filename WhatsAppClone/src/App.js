import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WhatsApp from './components/WhatsApp';
import Emre from './components/Emre';

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WhatsApp" component={WhatsApp} />
        <Stack.Screen name="Emre" component={Emre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;