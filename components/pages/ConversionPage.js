
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

function ConversionPage({ navigation }) {
    const [baseCurrency, setBaseCurrency] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [baseAmount, setBaseAmount] = useState('');
    const [targetAmount, setTargetAmount] = useState('');

    const currencyData = [
        { label: 'USD', value: '1' },
        { label: 'EUR', value: '2' },
        { label: 'GBP', value: '3' },
    ];

    const stateData = [
        { label: 'Alabama', value: '1', taxRate: 0.04 },
        { label: 'Alaska', value: '2', taxRate: 0.00 },
        { label: 'Arizona', value: '3', taxRate: 0.056 },
        { label: 'Texas', value: '4', taxRate: 0.0625 },
        { label: 'Utah', value: '5', taxRate: 0.0595 },
        { label: 'Vermont', value: '6', taxRate: 0.06 },
        { label: 'Virginia', value: '7', taxRate: 0.053 },
    ];

    const [valueState, setValueState] = useState(null);

    // State variables to store user input
    const [price, setPrice] = useState('');
    const [tax, setTax] = useState('');
    const [taxTotal, setTaxTotal] = useState('');

    const calculateTax = () => {
        if (valueState && price) {
            selectedState = stateData.find(state => state.value === valueState);
            const taxAmount = (parseFloat(price) * selectedState.taxRate) + (parseFloat(price));
            setTaxTotal(taxAmount.toFixed(2));
        }
    };

    return (
        <View style={styles.container}>

            {/* Tax Calculation Form */}
            <Text style={styles.calculateSalesTaxTitle}>Calculate Tax Sales</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>State:</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={stateData}
                        search
                        maxHeight={200}
                        labelField="label"
                        valueField="value"
                        placeholder="Select State"
                        searchPlaceholder="Search..."
                        value={valueState}
                        onChange={item => {
                            setValueState(item.value);
                            const selectedState = stateData.find(state => state.value === item.value);
                            const taxRatePercentage = (selectedState.taxRate * 100).toFixed(2) + '%';
                            setTax(taxRatePercentage);
                            calculateTax();
                        }}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Tax:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tax"
                        value={tax}
                        onChangeText={setTax}
                        editable={false}
                    />
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Total Cost:</Text>
                    <TextInput
                        style={styles.inputCost}
                        placeholder="Tax Total Cost"
                        value={taxTotal}
                        onChangeText={setTax}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.equalButtonRight} onPress={() => calculateTax()}>
                        <MaterialIcons name="calculate" size={30} color="white" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>


            {/* Currency Conversion Form */}
            <Text style={styles.conversionTitle}>Quick Currency Conversion</Text>

            <Text style={styles.currencyLeft}>Current Currency</Text>
            <Text style={styles.convertRight}>Convert To</Text>

            <Dropdown
                style={styles.dropdownCurrentCur}
                data={currencyData}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Currency"
                searchPlaceholder="Search..."
                value={baseCurrency}
                onChange={setBaseCurrency}
            />

            <TouchableOpacity style={styles.convertButton}>
                <MaterialIcons name="autorenew" size={30} color="white" style={styles.icon} />
            </TouchableOpacity>

            <Dropdown
                style={styles.dropdownConvert}
                data={currencyData}
                search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder="Currency"
                searchPlaceholder="Search..."
                value={targetCurrency}
                onChange={setTargetCurrency}
            />
            <TextInput
                style={styles.inputAmount}
                placeholder="Amount"
                value={taxTotal}
                onChangeText={setTax}
                editable={false}
            />
            <TextInput
                style={styles.convertAmount}
                placeholder="Amount"
                value={taxTotal}
                onChangeText={setTax}
                editable={false}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'lightgray',
    },
    calculateSalesTaxTitle: {
        left: 0,
        position: 'absolute',
        top: 10,
        fontSize: 20,
        paddingLeft: 15,
    },
    inputContainer: {
        marginTop: 30,
        marginBottom: 200,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: 60,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        width: '80%',
        height: 30
    },
    inputCost: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        width: '60%',
        height: 30
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        height: 30,
        width: '80%',
    },
    equalButtonRight: {
        backgroundColor: '#007bff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        right: 10,
        position: 'absolute',
        bottom: 0,
        fontSize: 30,
        paddingRight: 20,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    conversionTitle: {
        left: 0,
        position: 'absolute',
        top: 300,
        fontSize: 20,
        paddingLeft: 15,
    },
    currencyLeft: {
        left: 0,
        position: 'absolute',
        bottom: 390,
        fontSize: 15,
        paddingLeft: 15
    },
    dropdownCurrentCur: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        height: 30,
        left: 5,
        position: 'absolute',
        bottom: 340,
        fontSize: 15,
        paddingLeft: 15,
        width: '30%',
    },
    convertRight: {
        right: 0,
        position: 'absolute',
        bottom: 390,
        fontSize: 15,
        paddingRight: 15,
    },
    dropdownConvert: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        height: 30,
        right: 5,
        position: 'absolute',
        bottom: 340,
        fontSize: 15,
        paddingLeft: 15,
        width: '30%',
    },
    convertButton: {
        backgroundColor: '#007bff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        right: 165,
        position: 'absolute',
        bottom: 330,
        paddingRight: 15
    },
    inputAmount: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        height: 30,
        left: 5,
        position: 'absolute',
        bottom: 300,
        fontSize: 15,
        paddingLeft: 15,
        width: '30%',
    },
    convertAmount: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        height: 30,
        right: 5,
        position: 'absolute',
        bottom: 300,
        fontSize: 15,
        paddingLeft: 15,
        width: '30%',
    },
});


export default ConversionPage;