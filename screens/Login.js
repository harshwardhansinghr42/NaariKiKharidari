import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import {loginRegisterUser} from '../services/api.js'

const HomeScreen = () => {   
    const dispatch = useDispatch()   
    return(
        <View style={{ flex: 1 }}>
            <Button title='Click' onPress={() => loginRegisterUser({dispatch})}></Button>
            <View style={{ alignItems: 'center', paddingTop: 100 }}>
                <Text style={{ fontFamily: 'serif', fontSize: 32, paddingBottom: 30 }}>
                    Prem Poshak
                </Text>
                <Image
                    source={require('../assets/logo.jpeg')}
                    style={{ width: 100, height: 100, borderRadius: 100 / 2, }}
                />
            </View>
            <Formik
                initialValues={{ phone: '' }}
                onSubmit={values => handleFormSubmit()}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{ alignItems: 'center', paddingTop: 30 }}>
                    <TextInput
                    placeholder="Phone"
                    style={{borderWidth: 1, borderRadius: 10, borderColor: '#808080', width: 200}}
                    keyboardType={'phone-pad'}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
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