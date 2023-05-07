import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IPlace} from '../../models/Place';

const PlaceItem: FC<{place: IPlace; onSelect: () => void}> = ({
  place,
  onSelect,
}) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: place.imageUri}} />
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {},
});
