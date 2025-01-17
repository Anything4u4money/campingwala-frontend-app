import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import { AuthProvider } from './src/context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
<NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
    </AuthProvider>
    
  );
};

export default App;
