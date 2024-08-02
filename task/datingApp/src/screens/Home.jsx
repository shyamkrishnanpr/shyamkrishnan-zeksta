import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
import Card from '../components/Card';
import data from '../data.json';

const Home = ({navigation}) => {
  const handleViewProfile = id => {};

  const renderItem = ({item}) => (
    <Card
      image={item.photos[0].path}
      name={item.first_name + ' ' + item.last_name}
      city={item.location.city + ',' + item.location.country}
      onViewProfile={() => handleViewProfile(item.id)}
    />
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginLeft: 300,
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <Text style={{color: '#CE1694'}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>Daily Connections</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#CE1694',
    padding: 10,
    width: width * 0.5,
  },
  buttonText: {
    color: '#CE1694',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: width / 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1F2024',
    marginVertical: 10,
  },
});

export default Home;
