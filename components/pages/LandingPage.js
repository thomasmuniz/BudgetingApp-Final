
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function LandingPage({ navigation }) {

  // Filler Transaction Data
  const [sampleTransactions, setSampleTransactions] = useState([
    {
      type: 'Income',
      value: '200.00',
      date: '2024-04-01',
      category: 'Salary',
    },
    {
      type: 'Expense',
      value: '50.00',
      date: '2024-04-02',
      category: 'Food',
    },
    {
      type: 'Income',
      value: '150.00',
      date: '2024-04-02',
      category: 'Salary',
    },
    {
      type: 'Expense',
      value: '30.00',
      date: '2024-04-02',
      category: 'Utilities',
    },
  ]);

  // Initializing Add Entry Form
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    type: '',
    value: '',
    date: '',
    category: '',
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const newTransaction = {
      type: formValues.type,
      value: formValues.value,
      date: formValues.date,
      category: formValues.category,
    };

    setSampleTransactions([...sampleTransactions, newTransaction]);

    setFormValues({
      type: '',
      value: '',
      date: '',
      category: '',
    });

    setModalVisible(false);
  };

  const handleCancel = () => {
    setFormValues({
      type: '',
      value: '',
      date: '',
      category: '',
    });
    
    setModalVisible(false);
  };

  // Calculate total income
  const totalIncome = sampleTransactions
    .filter(transaction => transaction.type === 'Income') // Filter income transactions
    .reduce((total, transaction) => total + parseFloat(transaction.value), 0); // Sum their values

  // Calculate total expense
  const totalExpense = sampleTransactions
    .filter(transaction => transaction.type === 'Expense') // Filter income transactions
    .reduce((total, transaction) => total + parseFloat(transaction.value), 0); // Sum their values

  return (

    <View style={styles.container}>
      <Text style={styles.welcomeFont}>Welcome, John M. Doe</Text>

      {/* Displaying Disposable Income*/}
      <View style={styles.incomeContainer}>
        <Text style={styles.incomeLabel}>Disposable Income For This Pays Period</Text>
        <Text style={styles.DisposableIncomeFont}>${totalIncome - totalExpense}</Text>
        <Text style={styles.incomeLabel}>Apr 1 2024 - Apr 7 2024</Text>
      </View>


      <Text style={styles.incomeTextLeft}>Income</Text>
      <Text style={styles.expenseTextRight}>Expense</Text>

      <Text style={styles.incomeTotalLeft}>${totalIncome}</Text>
      <Text style={styles.expenseTotalRight}>${totalExpense}</Text>



      {/* Displaying Transactions */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Type</Text>
            <Text style={styles.headerCell}>Value</Text>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Category</Text>
          </View>
          {sampleTransactions.map((transaction, index) => (
            <View key={index} style={[styles.tableRow, transaction.type === 'Income' ? styles.incomeRow : styles.expenseRow]}>
              <Text style={styles.cell}>{transaction.type}</Text>
              <Text style={styles.cell}>{transaction.value}</Text>
              <Text style={styles.cell}>{transaction.date}</Text>
              <Text style={styles.cell}>{transaction.category}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navigation Menu */}
      <View style={styles.buttonGroup}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Currency Conversion')}>
          <MaterialIcons name="currency-exchange" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trends')}>
          <MaterialIcons name="trending-up" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add-circle-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="person" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="settings" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>

      </View>

      {/* Modal for the form */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Transaction</Text>
            {/* Form inputs */}
            <TextInput
              style={styles.input}
              placeholder="Type (Income/Expense)"
              value={formValues.type}
              onChangeText={(value) => handleInputChange('type', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Value (100.00)"
              keyboardType="numeric"
              value={formValues.value}
              onChangeText={(value) => handleInputChange('value', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date (2024-01-01)"
              value={formValues.date}
              onChangeText={(value) => handleInputChange('date', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={formValues.category}
              onChangeText={(value) => handleInputChange('category', value)}
            />
            {/* Submit button */}
            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeFont: {
    fontSize: 30,
    marginBottom: 20
  },
  incomeContainer: {
    alignItems: 'center',
    flex: '2',
  },
  incomeLabel: {
    marginBottom: 10,
    fontSize: 15,
  },
  DisposableIncomeFont: {
    fontSize: 80,
    marginBottom: 10,
  },
  incomeTextLeft: {
    left: 0,
    position: 'absolute',
    bottom: 470,
    fontSize: 30,
    paddingLeft: 15
  },
  expenseTextRight: {
    right: 0,
    position: 'absolute',
    bottom: 470,
    fontSize: 30,
    paddingRight: 15,
  },
  incomeTotalLeft: {
    left: 0,
    position: 'absolute',
    bottom: 440,
    fontSize: 25,
    paddingLeft: 15,

  },
  expenseTotalRight: {
    right: 0,
    position: 'absolute',
    bottom: 440,
    fontSize: 25,
    paddingRight: 15,

  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  // Table styles
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    width: 390,
    height: 300
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 10,

  },
  headerCell: {
    flex: 0,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  incomeRow: {
    backgroundColor: 'lightgreen',
  },

  expenseRow: {
    backgroundColor: 'orange',
  },


});


export default LandingPage;
