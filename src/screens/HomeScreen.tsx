import React from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import PlaceCard from '../components/PlaceCard';
import places from '../data/places';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';


const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const { isLoggedIn, logout } = useAuth();

  const renderPlace = ({ item }: any) => (
    <PlaceCard
      name={item.name}
      image={item.image}
      price={item.price}
      description={item.description}
      onPress={() => navigation.navigate('PlaceDetail', { place: item })}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Camping Wala</Text>
        {isLoggedIn ? (
          <Button title="Profile" onPress={() => logout()} />
        ) : (
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        )}
      </View>
      <FlatList
        data={places}
        renderItem={renderPlace}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});



export default HomeScreen;
