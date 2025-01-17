import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

const PlaceDetailScreen: React.FC = ({ route, navigation  }: any) => {
  const { place } = route.params;
  const { isLoggedIn } = useAuth();

  const handleBooking = () => {
    if (isLoggedIn) {
      navigation.navigate('Booking', { place });
    } else {
      navigation.navigate('Login', { redirectTo: 'Booking', place });
    }
  };


  return (
    <View style={styles.container}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.price}>₹{place.price}</Text>
      <Text style={styles.description}>{place.description}</Text>

      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: '#00b894',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#636e72',
  },
});

export default PlaceDetailScreen;
