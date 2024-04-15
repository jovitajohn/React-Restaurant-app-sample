import React from'react'
import {Text,View,StyleSheet} from 'react-native'

const ResultList = ({title,restaurents})=> {

    return <View>
        <Text style ={styles.listTitle}>{title}</Text>
        <Text> Restaurents : {restaurents.length}</Text>
    </View>
}

const styles =StyleSheet.create({

    listTitle:{
        fontSize: 20,
        marginHorizontal : 10
    }
})

export default ResultList