import {StyleSheet} from 'react-native';
import {Font_Family} from '../../utils/Fontfamily';
import {FONT_SIZES} from '../../utils/FontSize';
import {Colors} from '../../utils/Colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '60%',
    position: 'absolute',
    bottom: 40,
    right: 0,
    height: 320,
  },
  categoryName: {
    fontFamily: Font_Family.semiBold,
    fontSize: FONT_SIZES.eighteen,
    color: Colors.primary,
    margin: 15,
    textTransform: 'capitalize',
  },
  foodCard: {
    paddingBottom: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  cardInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  foodImage: {
    width: 110,
    height: 110,
  },
  foodRowStyles: {
    marginLeft: 10,
    width: '65%',
    height: 90,
  },
  foodName: {
    fontFamily: Font_Family.semiBold,
    fontSize: 16,
    color: Colors.black,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  foodPrice: {
    fontFamily: Font_Family.regular,
    fontSize: FONT_SIZES.fifteen,
    color: Colors.black,
  },
  foodDescription: {
    fontFamily: Font_Family.regular,
    fontSize: FONT_SIZES.fifteen,
    color: Colors.black,
    marginTop: 12,
  },
  menuItem: {
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListStyles: {
    backgroundColor: 'rgba(0,92,121,0.1)',
  },
  restaurantCard: {
    margin: 10,
    borderRadius: 15,
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  restaurantRowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  restaurantIcons: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'space-between',
  },
  innerCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: FONT_SIZES.twenty,
    fontFamily: Font_Family.bold,
    color: Colors.primary,
  },
  rowStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 100,
    marginVertical: 5,
  },
  distanceText: {
    fontSize: FONT_SIZES.tweleve,
    fontFamily: Font_Family.regular,
    color: Colors.black,
    textTransform: 'capitalize',
  },
  timerStyles: {
    width: 15,
    height: 15,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#477304',
    padding: 5,
    borderRadius: 10,
  },
  rating: {
    fontSize: FONT_SIZES.tweleve,
    fontFamily: Font_Family.regular,
    color: Colors.white,
  },
  totalRating: {
    fontSize: FONT_SIZES.thirteen,
    fontFamily: Font_Family.regular,
    color: '#808080',
  },
  restaurantCategory: {
    marginTop: 5,
    fontSize: FONT_SIZES.thirteen,
    fontFamily: Font_Family.regular,
    color: Colors.primary,
  },
  menuText: {
    marginTop: 15,
    fontSize: FONT_SIZES.eighteen,
    fontFamily: Font_Family.semiBold,
    color: Colors.primary,
    textAlign: 'center',
  },
  searchBarStyles: {
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  vegRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  vegText: {
    fontSize: FONT_SIZES.thirteen,
    fontFamily: Font_Family.regular,
    color: Colors.black,
    marginRight: 5,
  },
  nonVegRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  nonVegText: {
    fontSize: FONT_SIZES.thirteen,
    fontFamily: Font_Family.regular,
    color: Colors.black,
    marginRight: 5,
  },
  fabStyles: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  menuInnerModel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  modelHeading: {
    fontFamily: Font_Family.bold,
    fontSize: FONT_SIZES.fifteen,
    color: Colors.primary,
  },
  buttonDecrement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 3,
  },
  buttonIncrement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 3,
  },
  minus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    color: Colors.primary,
  },
  numberContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  number: {
    color: Colors.primary,
    fontFamily: Font_Family.bold,
    fontSize: FONT_SIZES.fifteen,
  },
  countRow: {
    position: 'absolute',
    bottom: -15,
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
});
