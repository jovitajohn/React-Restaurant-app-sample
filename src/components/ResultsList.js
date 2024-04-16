import React from'react'
import {Text,View,StyleSheet,FlatList} from 'react-native'
import RestaurentListItem from './RestaurentListItem'

const ResultList = ({title,restaurents})=> {

    return <View>
        <Text style ={styles.listTitle}>{title}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator = {false}
        data = {restaurents}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({item})=>{
            return <RestaurentListItem  restaurent = {item}/>
        }}

        />

    </View>
}

const styles =StyleSheet.create({

    listTitle:{
        fontSize: 30,
        marginHorizontal : 10
    }
})

export default ResultList