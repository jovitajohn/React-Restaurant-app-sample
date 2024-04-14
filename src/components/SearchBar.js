import React from 'react'
import { TextInput,View,StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,onTermChanged,onFinished})=>{
return (
    <View style = {styles.searchBar}>
        <Feather 
        name = 'search'
        size={30}/>
        <TextInput style = {styles.searchText} 
        placeholder='Search'
        value = {term}
        onChangeText={newTerm => onTermChanged(newTerm)}
        onEndEditing = {() => onFinished('true')}
        />
    </View>
)
}

const styles = StyleSheet.create({

    searchBar:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection : 'row',
        alignItems: 'center',
        padding:10
    },
    searchText :{
        fontSize: 18,
        marginStart:10
    }
})

export default SearchBar