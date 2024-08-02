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
import {calculateAge} from '../util/helpers';

const Home = ({navigation, route}) => {
  const {selectedGender, selectedAgeRange, selectedSortOption} =
    route.params || {};

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [selectedGender, selectedSortOption, selectedAgeRange, data]);

  const filterData = () => {
    let filtered = [...data];

    if (selectedGender) {
      filtered = filtered.filter(item => item.gender === selectedGender);
    }

    if (selectedSortOption) {
      filtered.sort((a, b) => {
        if (selectedSortOption === 'Score') {
          return b.score - a.score;
        } else if (selectedSortOption === 'Date Joined') {
          return new Date(b.created_at) - new Date(a.created_at);
        }
        return 0;
      });
    }

    if (selectedAgeRange) {
      const [minAge, maxAge] = selectedAgeRange.split('-').map(Number);

      filtered = filtered.filter(item => {
        const age = calculateAge(item.dob);
        return age >= minAge && age <= maxAge;
      });
    }

    setFilteredData(filtered);
  };

  const handleRefresh = () => {};

  const handleViewProfile = data => {
    navigation.navigate('OtherProfile', {data});
  };

  const renderItem = ({item}) => (
    <Card
      image={item.photos[0].path}
      name={
        item.first_name + ' ' + item.last_name + ', ' + calculateAge(item.dob)
      }
      city={item.location.city + ',' + item.location.country}
      onViewProfile={() => handleViewProfile(item)}
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
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Text style={{color: '#CE1694'}}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={styles.title}>Daily Connections</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRefresh}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData}
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
    marginVertical: 0,
  },
});

export default Home;
