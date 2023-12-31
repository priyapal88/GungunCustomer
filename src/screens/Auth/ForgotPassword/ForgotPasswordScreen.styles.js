import {Platform, StyleSheet} from 'react-native';
import {FONT_SIZES} from '../../../utils/FontSize';
import {Font_Family} from '../../../utils/Fontfamily';
import {Colors} from '../../../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 92, 121, 0.77)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZES.thirtySix,
    color: Colors.white,
    fontFamily: Font_Family.semiBold,
  },
  subTitle: {
    fontSize: FONT_SIZES.twenty,
    color: Colors.white,
    marginTop: 10,
    fontFamily: Font_Family.regular,
    textAlign: 'center',
  },
  loginView: {
    flex: 1.1,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    bottom: 20,
  },
  headingText: {
    fontSize: FONT_SIZES.twenty,
    color: '#000000',
    fontFamily: Font_Family.semiBold,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: '8%',
    borderColor: '#ccc',
    borderRadius: 10,
    padding: Platform.OS == 'ios' ? 15 : 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  imageIcon: {
    left: Platform.OS === 'android' ? '10%' : 0,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: FONT_SIZES.thirteen,
    fontFamily: Font_Family.medium,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#000000',
    fontFamily: Font_Family.medium,
    fontSize: FONT_SIZES.thirteen,
  },
  btnView: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: '10%',
  },
  textSignIn: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: FONT_SIZES.sixteen,
    fontFamily: Font_Family.medium,
  },
  errors: {
    color: 'red',
    fontSize: FONT_SIZES.tweleve,
    fontFamily: Font_Family.regular,
    bottom: '5%',
    left: '1%',
  },
  bottomtmtitledText: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: Font_Family.regular,
    fontSize: FONT_SIZES.tweleve,
  },
  buttonStyles: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonLabel: {
    fontFamily: Font_Family.medium,
    fontSize: FONT_SIZES.fifteen,
  },
});
