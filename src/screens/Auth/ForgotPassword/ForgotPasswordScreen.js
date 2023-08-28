import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {styles} from './ForgotPasswordScreen.styles';
import Feather from 'react-native-vector-icons/dist/Feather';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {images} from '../../../utils/Images';

export const ForgotPasswordScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Phone number is required*'),
  });

  const handleLogin = values => {
    navigation.navigate('OTP');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={images.backgroundImg}
          style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.text}>Hello, Customer!</Text>
            <Text style={styles.subTitle}>Please Reset your Password</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.loginView}>
        <ScrollView>
          <Formik
            initialValues={{phoneNumber: ''}}
            validationSchema={validationSchema}
            // onSubmit={(values)=>console.log(values)}
            onSubmit={handleLogin}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={{marginHorizontal: 20}}>
                <View style={{marginTop: '15%'}}>
                  <Text style={styles.headingText}>Forgot Your Password?</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Feather
                    name="smartphone"
                    size={18}
                    color="#DEA812"
                    style={styles.imageIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    maxLength={10}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                  />
                </View>
                {touched.phoneNumber && errors.phoneNumber && (
                  <Text style={styles.errors}>{errors.phoneNumber}</Text>
                )}
                <TouchableOpacity style={styles.btnView} onPress={handleSubmit}>
                  <Text style={styles.textSignIn}>Get OTP</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};