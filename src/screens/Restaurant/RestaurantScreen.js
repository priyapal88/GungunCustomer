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
import {MenuList} from '../../data/menuList';
import {ModalComponent} from '../Dashboard/HomeScreen/components';
import {AllCategories} from '../../data/AllCategories';
import {styles} from './Restaurant.styles';
export const RestaurantScreen = ({navigation}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(3);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const Item = ({dishes, categoryName}) => (
    <View>
      <Text style={styles.categoryName}>{categoryName}</Text>
      {dishes.map(item => (
        <Pressable
          style={styles.foodCard}
          onPress={() => setIsModalVisible(true)}>
          <View style={styles.cardInnerContainer}>
            <Image
              source={require('../../assets/data/food.jpeg')}
              style={styles.foodImage}
            />
            <View style={styles.foodRowStyles}>
              <MaterialCommunityIcons
                name="square-circle"
                size={20}
                color={Colors.green}
              />
              <Text style={styles.foodName}>{item.dish_name}</Text>
              <Text style={styles.foodPrice}>₹ {item.dish_price}</Text>
            </View>
          </View>
          <Text style={styles.foodDescription} numberOfLines={1}>
            {item.dish_description}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  const renderItem = ({item, index}) => (
    <Pressable key={index} style={styles.menuItem}>
      <Text
        style={{
          fontFamily:
            selected === item.id ? Font_Family.semiBold : Font_Family.regular,
          fontSize: FONT_SIZES.fifteen,
          color: selected === item.id ? Colors.primary : Colors.black,
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
                    Tossin Pizza & Pasta
                  </Text>
                  <View style={styles.rowStyles}>
                    <Image
                      source={require('../../assets/icons/timer.png')}
                      style={styles.timerStyles}
                    />
                    <Text style={styles.distanceText}>
                      {' '}
                      30-40 min · 1.2 KM ⏐ DLF Phase 5
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
                    <Text style={styles.totalRating}> 2.4K Rating</Text>
                  </View>
                  <Text style={styles.restaurantCategory}>
                    Asian · Oriental · Thai
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.menuText}>Menu</Text>
                <TextInput
                  style={styles.serachBarStyles}
                  placeholder="Search here"
                  placeholderTextColor="#808080"
                  mode={'outlined'}
                  outlineStyle={{borderColor: '#cdcdcd'}}
                  theme={{roundness: 15}}
                  activeOutlineColor={Colors.primary}
                  left={
                    <TextInput.Icon icon="search1" color={Colors.primary} />
                  }
                />
                <View style={styles.filterRow}>
                  <View style={styles.vegRow}>
                    <Text style={styles.vegText}>Veg Only</Text>
                    <Switch
                      value={isSwitchOn}
                      onValueChange={onToggleSwitch}
                      color={'#296c07'}
                    />
                  </View>
                  <View style={styles.nonVegRow}>
                    <Text style={styles.nonVegText}>Non-Veg Only</Text>
                    <Switch
                      value={isSwitchOn}
                      onValueChange={onToggleSwitch}
                      color={'#a90404'}
                    />
                  </View>
                </View>
              </View>
            </>
          );
        }}
      />
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
            />
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};