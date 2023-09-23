import React, {useState} from 'react';
import {View, Text, Image, Pressable, FlatList, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Divider, FAB, Switch, TextInput} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {FONT_SIZES} from '../../utils/FontSize';
import {Font_Family} from '../../utils/Fontfamily';
import {Colors} from '../../utils/Colors';
import {ModalComponent} from '../Dashboard/HomeScreen/components';
import {AllCategories} from '../../data/AllCategories';
import {styles} from './Restaurant.styles';
import Config from '../../config';
import {Loader} from '../../components/common/Loader';
import {useGetRestaurantDetails} from '../../hooks';

export const RestaurantScreen = ({navigation, route}) => {
  const {restaurantId} = route.params;
  const {restaurantDetails, loading} = useGetRestaurantDetails({restaurantId});
  const MenuList = restaurantDetails?.menu;

  const [isVegSwitchOn, setIsVegSwitchOn] = useState(false);
  const [isNonVegSwitchOn, setIsNonVegSwitchOn] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(3);

  const handleToggleVegSwitch = () => {
    setIsVegSwitchOn(!isVegSwitchOn);
    setIsNonVegSwitchOn(false);
  };

  const handleToggleNonVegSwitch = () => {
    setIsNonVegSwitchOn(!isNonVegSwitchOn);
    setIsVegSwitchOn(false);
  };

  const Item = ({dishes, categoryName}) => {
    const filteredDishes = dishes
      .filter(item => {
        if (isVegSwitchOn && isNonVegSwitchOn) {
          return true;
        } else if (isVegSwitchOn) {
          return item.dish_type === 'V';
        } else if (isNonVegSwitchOn) {
          return item.dish_type === 'N';
        } else {
          return dishes;
        }
      })
      .filter(item =>
        item.dish_name.toLowerCase().includes(searchText.toLowerCase()),
      );
    return (
      <View>
        <Text style={styles.categoryName}>{categoryName}</Text>
        {filteredDishes.map(item => (
          <Pressable
            style={styles.foodCard}
            onPress={() => setIsModalVisible(true)}
            key={item.id}>
            <View style={styles.cardInnerContainer}>
              <Image
                source={{uri: Config.API_URL + item?.dish_image}}
                style={styles.foodImage}
              />
              <View style={styles.foodRowStyles}>
                {item?.dish_type === 'V' ? (
                  <MaterialCommunityIcons
                    name="square-circle"
                    size={20}
                    color={Colors.green}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="square-circle"
                    size={20}
                    color={Colors.red}
                  />
                )}

                <Text style={styles.foodName}>{item.dish_name}</Text>
                <Text style={styles.foodPrice}>₹ {item.dish_price}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    );
  };

  const renderItem = ({item, index}) => (
    <Pressable key={index} style={styles.menuItem}>
      <Text
        style={{
          fontFamily:
            selected === item.id ? Font_Family.semiBold : Font_Family.regular,
          fontSize: FONT_SIZES.fifteen,
          color: selected === item.id ? Colors.primary : Colors.black,
          textTransform: 'capitalize',
        }}>
        {item?.category_name}
      </Text>
      <Text
        style={{
          fontFamily:
            selected === item.id ? Font_Family.semiBold : Font_Family.regular,
          fontSize: FONT_SIZES.fifteen,
          color: selected === item.id ? Colors.primary : Colors.black,
        }}>
        (6)
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={MenuList}
          renderItem={({item}) => (
            <Item dishes={item.dishes} categoryName={item.category_name} />
          )}
          keyExtractor={item => item.id}
          style={styles.flatListStyles}
          ListHeaderComponent={() => {
            return (
              <>
                <View style={styles.restaurantCard}>
                  <View style={styles.restaurantRowStyles}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <MaterialCommunityIcons
                        name="arrow-left"
                        size={24}
                        color="black"
                      />
                    </Pressable>
                    <View style={styles.restaurantIcons}>
                      <Ionicons name="heart-outline" size={24} color="black" />
                      <Ionicons name="share-social" size={24} color="black" />
                    </View>
                  </View>
                  <View style={styles.innerCard}>
                    <Text style={styles.restaurantName}>
                      {restaurantDetails?.store_name}
                    </Text>
                    <View style={styles.rowStyles}>
                      <Image
                        source={require('../../assets/icons/timer.png')}
                        style={styles.timerStyles}
                      />
                      <Text style={styles.distanceText}>
                        {' '}
                        {restaurantDetails?.time} min ·{' '}
                        {restaurantDetails?.distance} KM ⏐{' '}
                        {restaurantDetails?.address?.address1 +
                          ' ' +
                          restaurantDetails?.address?.address2}
                      </Text>
                    </View>
                    <View style={styles.ratingRow}>
                      <View style={styles.ratingBox}>
                        <Text style={styles.rating}>4.2 </Text>
                        <Ionicons
                          name="star"
                          size={15}
                          color={Colors.secondary}
                        />
                      </View>
                      <Text style={styles.totalRating}>
                        {' '}
                        {restaurantDetails?.average_rating}K Rating
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.restaurantCategory,
                        {textTransform: 'capitalize'},
                      ]}>
                      {MenuList &&
                        MenuList.slice(0, 3)
                          .map(item => item.category_name)
                          .join(' · ')}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.menuText}>Menu</Text>
                  <View style={{marginHorizontal: 10}}>
                    <TextInput
                      style={styles.searchBarStyles}
                      placeholder="Search here"
                      placeholderTextColor="#808080"
                      mode={'outlined'}
                      outlineStyle={{borderColor: '#cdcdcd'}}
                      theme={{roundness: 15}}
                      activeOutlineColor={Colors.primary}
                      left={
                        <TextInput.Icon icon="search1" color={Colors.primary} />
                      }
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>
                  <View style={styles.filterRow}>
                    <View style={styles.vegRow}>
                      <Text style={styles.vegText}>Veg Only</Text>
                      <Switch
                        value={isVegSwitchOn}
                        onValueChange={handleToggleVegSwitch}
                        color={'#296c07'}
                      />
                    </View>
                    <View style={styles.nonVegRow}>
                      <Text style={styles.nonVegText}>Non-Veg Only</Text>
                      <Switch
                        value={isNonVegSwitchOn}
                        onValueChange={handleToggleNonVegSwitch}
                        color={'#a90404'}
                      />
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        />
      )}

      <FAB
        onPress={() => setVisible(true)}
        icon={() => (
          <MaterialIcons name="menu-book" size={24} color="#B8860B" />
        )}
        label={'Menu'}
        color={'#B8860B'}
        style={styles.fabStyles}
      />
      <ModalComponent
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <Pressable
          style={styles.centeredView}
          onPress={() => {
            setVisible(!visible);
          }}>
          <View style={styles.modalView}>
            <View style={styles.menuInnerModel}>
              <Text style={styles.modelHeading}>Menu</Text>
              <Pressable
                style={{paddingHorizontal: 5}}
                onPress={() => {
                  setVisible(!visible);
                }}>
                <Ionicons name={'close'} size={24} color={Colors.black} />
              </Pressable>
            </View>
            <Divider />
            <FlatList
              data={AllCategories}
              keyExtractor={item => String(item.id)}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};
