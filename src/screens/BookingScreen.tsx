import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const BookingScreen: React.FC = ({ route }: any) => {
  const { place } = route.params;

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);

  const handleConfirmBooking = () => {
    if (!checkIn || !checkOut) {
      Alert.alert('Error', 'Please select both check-in and check-out dates.');
      return;
    }

    // Simulate booking success
    Alert.alert(
      'Booking Confirmed!',
      `You have booked ${place.name} from ${checkIn.toDateString()} to ${checkOut.toDateString()}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book {place.name}</Text>

      <Text style={styles.label}>Check-In Date:</Text>
      <Button title="Select Date" onPress={() => setShowCheckInPicker(true)} />
      {checkIn && <Text style={styles.date}>{checkIn.toDateString()}</Text>}
      <DatePicker
        modal
        open={showCheckInPicker}
        date={checkIn || new Date()}
        onConfirm={(date) => {
          setCheckIn(date);
          setShowCheckInPicker(false);
        }}
        onCancel={() => setShowCheckInPicker(false)}
      />

      <Text style={styles.label}>Check-Out Date:</Text>
      <Button title="Select Date" onPress={() => setShowCheckOutPicker(true)} />
      {checkOut && <Text style={styles.date}>{checkOut.toDateString()}</Text>}
      <DatePicker
        modal
        open={showCheckOutPicker}
        date={checkOut || new Date()}
        onConfirm={(date) => {
          setCheckOut(date);
          setShowCheckOutPicker(false);
        }}
        onCancel={() => setShowCheckOutPicker(false)}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Price: ₹{place.price} x {checkIn && checkOut ? 1 : 0} nights
        </Text>
      </View>

      <Button title="Confirm Booking" onPress={handleConfirmBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#2d3436',
    marginVertical: 5,
  },
  summary: {
    marginVertical: 20,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BookingScreen;
