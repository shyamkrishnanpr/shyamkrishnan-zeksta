import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = ({name, image, city, onViewProfile}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.city}>{city}</Text>

        <TouchableOpacity style={styles.button} onPress={onViewProfile}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,

    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    width: width - 40,
    height: 300,
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: '#CE1694',
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '200',
    color: '#555',
  },
  city: {
    fontSize: 14,
    color: '#555',
    fontWeight: '800',
    marginBottom: 10,
  },
  button: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#CE1694',
    padding: 10,
  },
  buttonText: {
    color: '#CE1694',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: width / 3.5,
  },
});

export default Card;
