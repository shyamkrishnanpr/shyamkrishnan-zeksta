import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CustomDropdown = ({ options, selectedValue, onSelect, onClose }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.optionButton,
        selectedValue === item.value && styles.selectedOption,
      ]}
      onPress={() => {
        onSelect(item.value);
        onClose();
      }}>
      <Text
        style={[
          styles.optionText,
          selectedValue === item.value && styles.selectedOptionText,
        ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.dropdownContainer}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: '#fff',
    borderColor: '#C5C6CC',
    borderRadius: 12,
    borderWidth: 1,
    maxHeight: 200,
  },
  optionButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  selectedOption: {
    backgroundColor: '#CE1694',
  },
  optionText: {
    color: '#CE1694',
    fontSize: 14,
  },
  selectedOptionText: {
    color: 'white',
  },
});

export default CustomDropdown;
