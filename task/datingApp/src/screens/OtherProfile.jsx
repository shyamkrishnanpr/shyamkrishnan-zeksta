import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HeartIcon from '../components/Icons/HeartIcon';

import {calculateAge} from '../util/helpers';

const {width} = Dimensions.get('window');

const OtherProfile = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal style={styles.imageGallery}>
          {data.photos.map((photo, index) => (
            <Image
              key={index}
              source={{uri: photo.path}}
              style={styles.image}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'black'}}>Go Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>
          {data.first_name} {data.last_name}
          {', '}
          {calculateAge(data.dob)}
        </Text>

        <Text style={styles.city}>
          {data.location.city}, {data.location.country}
        </Text>

        <Text style={styles.description}>
          {data.bio || 'No description available.'}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
            color: 'black',
          }}>
          Interests
        </Text>

        <View style={styles.interestsContainer}>
          {data.interests.map(interest => (
            <TouchableOpacity key={interest.id} style={styles.interestButton}>
              <Text style={styles.interestText}>{interest.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
  },
  imageGallery: {
    width: width,
    height: 400,
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  city: {
    fontSize: 18,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  button: {
    borderRadius: 12,
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#CE1694',
    padding: 10,
    width: width * 0.5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#CE1694',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  interestButton: {
    backgroundColor: '#CE1694',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    margin: 5,
  },
  interestText: {
    color: 'white',
    fontSize: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    // width: 30,
    // height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 15,
    padding: 5,
  },
});

export default OtherProfile;
