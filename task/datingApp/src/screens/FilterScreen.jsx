import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const FilterScreen = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);

  const handleClearAll = () => {
    setSelectedGender(null);
    setSelectedAgeRange(null);
  };

  const handleApplyFilter = () => {
    console.log('Filters applied!');
  };

  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };

  const handleAgeRangeSelect = range => {
    setSelectedAgeRange(range);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: '800', fontSize: 14, color: '#1F2024'}}>
          Filter
        </Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.contentContainer}>
        <ScrollView style={styles.filterContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gender</Text>
            <View style={styles.optionsContainer}>
              {['Male', 'Female'].map(gender => (
                <TouchableOpacity
                  key={gender}
                  style={[
                    styles.optionButton,
                    selectedGender === gender && styles.selectedOption,
                  ]}
                  onPress={() => handleGenderSelect(gender)}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedGender === gender && styles.selectedOptionText,
                    ]}>
                    {gender}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Age Ranges</Text>
            <View style={styles.optionsContainer}>
              {['20-24', '25-30', '30-40', '40+'].map(range => (
                <TouchableOpacity
                  key={range}
                  style={[
                    styles.optionButton,
                    selectedAgeRange === range && styles.selectedOption,
                  ]}
                  onPress={() => handleAgeRangeSelect(range)}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedAgeRange === range && styles.selectedOptionText,
                    ]}>
                    {range}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sort By</Text>
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>Score</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.scoreContainer}>
            <View
              style={{
                backgroundColor: '#CE1694',

                padding: 10,
                borderRadius: 10,
                width: width / 1.2,
              }}>
              <Text style={styles.scoreTitle}>Score</Text>
            </View>

            <View style={{margin: 10}}>
              <Text style={styles.scoreText}>Date Joined</Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={handleApplyFilter}>
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#CE1694',
  },
  clearAllText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#CE1694',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  filterContainer: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
    color: '#1F2024',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#ddd',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#CE1694',
  },
  optionText: {
    color: '#CE1694',
    fontSize: 10,
    fontWeight: '600',
  },
  selectedOptionText: {
    color: 'white',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#C5C6CC',
    borderRadius: 12,
    marginBottom: 20,
  },
  applyButton: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#CE1694',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#CE1694',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  scoreContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderColor: '#C5C6CC',
    borderWidth: 1,
  },
  scoreTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },

  scoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#71727A',
  },
  placeholderContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: '#C5C6CC',
    borderWidth: 1,
  },
  placeholderText: {
    color: '#888',
  },
});

export default FilterScreen;
