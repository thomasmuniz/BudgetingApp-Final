
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

function ProfilePage({ navigation }) {

  const currencyData = [
    { label: 'AUD: Australian', value: '1' },
    { label: 'GBP: Great Britain', value: '2' },
    { label: 'EUR: Euro', value: '3' },
    { label: 'JPY: Japan', value: '4' },
    { label: 'CHF: Swiss Franc', value: '5' },
    { label: 'USD: United States', value: '6' },
    { label: 'AFN: Afghanistan', value: '7' },
  ];

  const [valueCurrency, setValueCurrency] = useState(null);

  // State variables to store user input
  const [currency, setCurrency] = useState('');
  const [payPeriod, setPayPeriod] = useState('');
  const [grossIncome, setGrossIncome] = useState('');
  const [retirement, setRetirement] = useState('');
  const [insurance, setInsurance] = useState('');
  const [emergencyFund, setEmergencyFund] = useState('');
  const [funMoney, setFunMoney] = useState('');
  const [budgetGoal, setBudgetGoal] = useState('');

  // State variable to manage edit mode
  const [editMode, setEditMode] = useState(false);

  // State variables to store original values in edit mode
  const [originalValues, setOriginalValues] = useState({
    currency: '',
    payPeriod: '',
    grossIncome: '',
    retirement: '',
    insurance: '',
    emergencyFund: '',
    funMoney: '',
    budgetGoal: '',
  });

  // Function to toggle edit mode
  const toggleEditMode = () => {
    if (!editMode) {
      // Save original values
      setOriginalValues({
        currency,
        payPeriod,
        grossIncome,
        retirement,
        insurance,
        emergencyFund,
        funMoney,
        budgetGoal,
      });
    }
    setEditMode(!editMode);
  };

  // Function to save changes
  const saveChanges = () => {
    setEditMode(false);
  };

  // Function to cancel changes
  const cancelChanges = () => {
    setCurrency(originalValues.currency);
    setPayPeriod(originalValues.payPeriod);
    setGrossIncome(originalValues.grossIncome);
    setRetirement(originalValues.retirement);
    setInsurance(originalValues.insurance);
    setEmergencyFund(originalValues.emergencyFund);
    setFunMoney(originalValues.funMoney);
    setBudgetGoal(originalValues.budgetGoal);

    setEditMode(false);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        {/* Profile View Form */}
        <View style={styles.nameText}>
          <MaterialIcons name="person" size={250} color="black" />
          <Text>John M. Doe</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Currency:</Text>
            <Dropdown
              style={styles.dropdown}
              data={currencyData}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Select currency"
              searchPlaceholder="Search..."
              value={valueCurrency}
              onChange={item => {
                setValueCurrency(item.value);
              }}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Pay Period:</Text>
            <TextInput
              style={styles.input}
              placeholder="Monthly"
              value={payPeriod}
              onChangeText={setPayPeriod}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Gross Income:</Text>
            <TextInput
              style={styles.input}
              placeholder="Gross Income"
              value={grossIncome}
              onChangeText={setGrossIncome}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Retirement:</Text>
            <TextInput
              style={styles.input}
              placeholder="Retirement"
              value={retirement}
              onChangeText={setRetirement}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Insurance:</Text>
            <TextInput
              style={styles.input}
              placeholder="Insurance"
              value={insurance}
              onChangeText={setInsurance}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Emergency Fund:</Text>
            <TextInput
              style={styles.input}
              placeholder="Emergency Fund"
              value={emergencyFund}
              onChangeText={setEmergencyFund}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Fun Money:</Text>
            <TextInput
              style={styles.input}
              placeholder="Fun Money"
              value={funMoney}
              onChangeText={setFunMoney}
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Budget Goal:</Text>
            <TextInput
              style={styles.input}
              placeholder="Budget Goal"
              value={budgetGoal}
              onChangeText={setBudgetGoal}
            />
          </View>

        </View>
        
        {/* Toggle Save & Cancel buttons when in Edit mode */}
        {editMode ? (
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={saveChanges}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelChanges}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'lightgray',
  },
  nameText: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '70%',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 40,
    width: '70%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default ProfilePage;