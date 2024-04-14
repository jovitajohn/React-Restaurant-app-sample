import React,{useState} from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'
import SearchBar from '../components/SearchBar'


const HomeScreen = ({navigation}) => {
    const [term,setTerm] = useState('')
    const [searchState,setSearchState] = useState('false')
return <View style = {styles.mainContainer}>
    <SearchBar 
    term = {term}
    onTermChanged = {(newTerm)=> setTerm(newTerm)}
    onFinished = {(searchState) => setSearchState(searchState)}
    />
    <View >
    <Text> HomeScreen</Text>
    <Button 
        title='Go Back'
        onPress={()=> navigation.goBack()}
    />
    {searchState=='true' ? <Text>{term}</Text> : null }
    </View>
</View>
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        padding: 10,
        flex :1
    }

})

export default HomeScreen