
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

function TrendsPage() {
    // Filler Data for monthly incomes
    const incomeData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [500, 300, 800, 200, 600, 900]
            }
        ]
    };

    // Filler Data for monthly expenses
    const expenseData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [200, 800, 500, 900, 300, 500]
            }
        ]
    };

    return (
        <View style={styles.container}>
            <Text style={styles.trendTitle}>Monthly Income Trends</Text>
            <BarChart
                style={{
                    marginVertical: 8,
                    borderRadius: 10,
                }}
                data={incomeData}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                showValuesOnTopOfBars={true}
                chartConfig={{
                    backgroundGradientFrom: 'gray',
                    backgroundGradientTo: 'gray',
                    color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2, 
                    barPercentage: 0.70,
                    style: {
                        borderRadius: 16,
                    }
                }}
            />

            <Text style={styles.trendTitle}>Monthly Expense Trends</Text>
            <BarChart
                style={{
                    marginVertical: 8,
                    borderRadius: 10,
                }}
                data={expenseData}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                showValuesOnTopOfBars={true}
                chartConfig={{
                    backgroundGradientFrom: 'gray',
                    backgroundGradientTo: 'gray',
                    color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    strokeWidth: 2, 
                    barPercentage: 0.70,
                    style: {
                        borderRadius: 16,
                    }
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: 'lightgray',       
      },
      trendTitle: {
        fontSize: 20,
        paddingLeft: 15,  
        paddingBottom: 10,  
        paddingTop: 20
      },
});

export default TrendsPage;