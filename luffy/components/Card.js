import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ cardNumber, backgroundColor }) => {
  const formatCardNumber = (number) => {
    return '•••• •••• •••• ' + number.slice(12);
  };

  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View>
      <Text style={styles.cardType}>VISA</Text>
      <Text style={styles.mainType}>Platinum</Text>
      </View>
      <Text style={styles.cardNumber}>{formatCardNumber(cardNumber)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    padding: 20,
    width: 270,  
    height: 150, 
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 10
  },
  cardType: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5, 
  },
  mainType: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5, 
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,  
    letterSpacing: 2,
  }
});

export default Card;
