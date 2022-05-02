import React, { useState }  from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CategoriesList = () => {
    const [selected, setSelected] = React.useState(null);
    
    const DATA = [
        {
          id: 1,
          title: 'Clothing',
        },
        {
          id: 2,
          title: 'Jwellery',
        },
        {
          id: 3,
          title: 'Footwear',
        },
        {
            id: 4,
            title: 'Clothing',
          },
          {
            id: 5,
            title: 'Jwellery',
          },
          {
            id: 6,
            title: 'Footwear',
          },
          {
            id: 7,
            title: 'Clothing',
          },
          {
            id: 8,
            title: 'Jwellery',
          },
          {
            id: 9,
            title: 'Footwear',
          },
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelected(item.id)}>
            <View style={[styles.categoryView, {backgroundColor: item.id===selected ? 'yellow':'white'}]}>
                <Text style={styles.categoryName} >
                    { item.title }
                </Text>
            </View>
        </TouchableOpacity>
    );

    return(
        <FlatList style={styles.categoryContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default CategoriesList;

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 20
    },
    categoryView: {
        borderRadius: 10,
        marginHorizontal: 3,
        padding: 10
    },
    categoryName: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});