import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'

const RestaurentListItem = ({restaurent})=> {

    return <View style={styles.container}>
        <Image style={styles.image} source={{uri : restaurent.image_url}}/>
        <Text style={styles.title}> {restaurent.name}</Text>
        <Text> {restaurent.rating} Starts, {restaurent.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
title:{
    fontSize:20,
    fontWeight :'bold'
},
image :{
    width: 300,
    height : 150,
    borderRadius:5
},
container:{
    margin: 5
},
text:{
    
}
})

export default RestaurentListItem