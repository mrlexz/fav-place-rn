import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IPlace} from '../../models/Place';
import PlaceItem from '../PlaceItem';
import Colors from '../../constants/Colors';

interface PlaceListProps {
  places?: Array<IPlace>;
}

const PlaceList: FC<PlaceListProps> = ({places}) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No place added yet</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} onSelect={() => {}} />}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 18,
    color: Colors.primary200,
  },
});
