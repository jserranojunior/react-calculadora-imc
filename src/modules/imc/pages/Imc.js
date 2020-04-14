import React, { useState, setState } from 'react';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

// import { Container } from './styles';

export default function App() {



    const [peso, onChangeText] = useState('86');
    const [altura, onChangeAltura] = useState('175');
    const [imc, onChangeImc] = useState('4');
    const [textoImc, onChangeTextoImc] = useState('');

    // const imc = useState('0');

    function somar() {
        var quadrado = (parseInt(altura) * parseInt(altura)) / 10000;
        var valor = parseInt(peso) / parseFloat(quadrado);

        if (valor < 18.6)
            onChangeTextoImc("Abaixo do peso")
        else if (valor < 25.0)
            onChangeTextoImc("Peso ideal")
        else if (valor < 30.0)
            onChangeTextoImc("Levemente acima do peso")
        else if (valor < 35.0)
            onChangeTextoImc("Obesidade Grau I")
        else if (valor < 40.0)
            onChangeTextoImc("Obesidade Grau II")
        else
            onChangeTextoImc("Obesidade Grau IIII")
        onChangeImc(parseInt(valor))
    }
    const styles = StyleSheet.create({
        scrollView: {
            backgroundColor: Colors.lighter,
        },
        engine: {
            position: 'absolute',
            right: 0,
        },
        body: {
            backgroundColor: Colors.white,
        },
        sectionContainer: {
            marginTop: 15,
            paddingHorizontal: 24,
        },
        sectionTitle: {
            fontSize: 24,
            fontWeight: '600',
            color: Colors.black,
        },
        sectionDescription: {
            marginTop: 8,
            fontSize: 18,
            fontWeight: '400',
            color: Colors.dark,
        },
        highlight: {
            fontWeight: '700',
        },
        footer: {
            color: Colors.dark,
            fontSize: 12,
            fontWeight: '600',
            padding: 4,
            paddingRight: 12,
            textAlign: 'right',
        },
    });

    return (
        <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Calculadora de IMC</Text>
                <Text style={styles.sectionDescription}>
                    Aplicativo feito com
                <Text style={styles.highlight}> React Native </Text>
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 0.2 }}
                    onChangeText={text => onChangeText(text)}
                    value={peso}
                />
            </View>
            <View style={styles.sectionContainer}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 0.2 }}
                    onChangeAltura={text => onChangeAltura(text)}
                    value={altura}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Button
                    onPress={somar}
                    title="Calcular"
                    color="#841584"
                    accessibilityLabel="Botão de calcular"
                />
            </View>          
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                    {textoImc ? 'Seu IMC:' +  imc : ''}

                </Text>
                <Text style={styles.sectionDescription}>
                    {textoImc ? textoImc : ''}
                </Text>
            </View>

        </View>
    );

}

