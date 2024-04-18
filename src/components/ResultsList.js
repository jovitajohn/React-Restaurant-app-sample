import React from'react'
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import RestaurentListItem from './RestaurentListItem'


const ResultList = ({title,restaurents})=> {

    const navigation = useNavigation()

    if(!restaurents.length){
        return null
    }

    return <View>
        <Text style ={styles.listTitle}>{title}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator = {false}
        data = {restaurents}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress ={()=>navigation.navigate('Details',{restaurant:item})}>
                    <RestaurentListItem  restaurent = {item}/>
                </TouchableOpacity>
            )
        }}

        />

    </View>
}

const styles =StyleSheet.create({

    listTitle:{
        fontSize: 25,
        marginHorizontal : 10
    }
})

export default ResultList