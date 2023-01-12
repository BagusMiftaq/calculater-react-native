import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [displayNumber, setDisplay] = useState("0");
    const [operator, setOperator] = useState(null);
    const [firstNumber, setFirstNumber] = useState(null);


    const clearCalculator = () => {
        setDisplay("0");
        setOperator(null);
        setFirstNumber(null);
    }

    const inputDigit = (digit) => {
        if (displayNumber === "0") {
            setDisplay(digit);
        } else {
            setDisplay(displayNumber + digit)
        }
    }

    const handleOperator = (operator) => {

        if (operator === null) {
            setOperator(operator)
            setFirstNumber(displayNumber);
            setDisplay("");
        } else {
            if (displayNumber === "") {
                setOperator(operator)
                setDisplay("")
            } else {
                setOperator(operator)
                setFirstNumber(displayNumber)
                setDisplay("")
            }

        }
    }

    const performCalculation = () => {
        if (firstNumber == null || operator == null) {
            alert("Operatornya mana Bwwangg?");
            return;
        }

        let result = 0;
        if (operator === "+") {
            result = parseInt(firstNumber) + parseInt(displayNumber);
        } else if (operator === "-") {
            result = parseInt(firstNumber) - parseInt(displayNumber);
        } else if (operator === "x") {
            result = parseInt(firstNumber) * parseInt(displayNumber);
        } else {
            result = parseInt(firstNumber) / parseInt(displayNumber);
        }

        setDisplay(result)
    }

    const NUMBER = [
        {value: "7"},
        {value: "8"},
        {value: "9"},
        {value: "4"},
        {value: "5"},
        {value: "6"},
        {value: "1"},
        {value: "2"},
        {value: "3"},
    ]

    const OPERATION = [
        {value: "+"},
        {value: "-"},
        {value: "/"},
        {value: "x"}
    ]

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>CALCULATOR</Text>
            </View>
            <View style={styles.display}>
                <Text style={styles.displayText}>{displayNumber}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <View style={styles.buttonNumberWrapper}>
                    {NUMBER.map((item) => (
                        <Pressable style={styles.buttonNumber} android_ripple={{color: 'grey', radius: 35}}
                                   onPress={() => inputDigit(item.value)}>
                            <Text style={styles.buttonitem}>{item.value}</Text>
                        </Pressable>
                    ))}

                    <Pressable style={styles.buttonOp} android_ripple={{color: 'grey', radius: 35}}
                               onPress={clearCalculator}>
                        <Text style={styles.buttonitemSp}>CE</Text>
                    </Pressable>
                    <Pressable style={styles.buttonNumber} android_ripple={{color: 'grey', radius: 35}}
                               onPress={() => inputDigit("0")}>
                        <Text style={styles.buttonitem}>0</Text>
                    </Pressable>
                    <Pressable style={styles.buttonOp} android_ripple={{color: 'grey', radius: 35}}
                               onPress={performCalculation}>
                        <Text style={styles.buttonitemSp}>=</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonOpWrapper}>
                    {OPERATION.map((item) => (
                        <Pressable style={styles.buttonOp} android_ripple={{color: 'grey', radius: 35}}
                                   onPress={() => handleOperator(item.value)}>
                            <Text style={styles.buttonitemSp}>{item.value}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    title: {
        margin: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
    },
    display: {
        borderWidth: 3,
        backgroundColor: '#fff',
        height: 200,
        padding: 20,
        width: 'auto',
        margin: 20,
        marginBottom: 10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    displayText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
        alignItems: 'center'
    },
    buttonOpWrapper: {
        flex: 1,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'center',

    },
    buttonOp: {
        borderWidth: 3,
        height: 75,
        marginBottom: 10,
        width: 75,
        borderRadius: 50,
        backgroundColor: "#ff2119",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonNumberWrapper: {
        flex: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        flexWrap: "wrap"
    },
    buttonNumber: {
        borderWidth: 3,
        height: 75,
        marginBottom: 10,
        width: 75,
        borderRadius: 50,
        backgroundColor: "#ffdd33",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonitem: {
        fontSize: 30,
    },

    buttonitemSp: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    buttonPress: {
        height: 75,
        marginBottom: 10,
        width: 75,
        borderRadius: 50,
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },


});
