import * as React from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

const HomeScreen = () => {      
    return(
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', paddingTop: 150 }}>
                <Text style={{ fontFamily: 'serif', fontSize: 32, paddingBottom: 30 }}>
                    Prem Poshak
                </Text>
                <Image
                    source={require('../assets/logo.jpeg')}
                    style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                />
            </View>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ alignItems: 'center', paddingTop: 30 }}>
                    <TextInput
                    placeholder="Phone"
                    style={{borderWidth: 1, borderRadius: 10, borderColor: '#808080', width: 200}}
                    keyboardType={'phone-pad'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    <TouchableOpacity
                        style={{
                            width: 100,
                            marginTop: 20,
                            backgroundColor: "green",
                            padding: 15,
                            borderRadius: 50,
                          }}
                        onPress={handleSubmit}
                        >
                        <Text style={{color: "white",
                            fontSize: 20,
                            justifyContent: "center",
                            textAlign: "center"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                )}
            </Formik>
        </View>
    )
}

export default HomeScreen;