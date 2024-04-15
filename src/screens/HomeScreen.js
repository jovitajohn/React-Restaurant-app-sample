import React,{useState} from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/Yelp'



const HomeScreen = ({navigation}) => {

    const [term,setTerm] = useState('')
    const [searchState,setSearchState] = useState('false')
    const [restaurants,setRestaurents] = useState([])
    const [errMessage,setErrMessage]= useState('')

    const getRestaurenets  = async ()=> {
        try{
        const response = await Yelp.get('/search',{
            params:{
                limit:20,
                term: term,
                location: 'Edinburgh, UK'
            }
        })
        setRestaurents(response.data.businesses)
        }catch(err){
            setErrMessage('Something went wrong! Try again later!')
        }   
    }

return <View style = {styles.mainContainer}>
    <SearchBar 
    term = {term}
    onTermChanged = {(newTerm)=> setTerm(newTerm)}
    onFinished = {(searchState) => {
        setSearchState(searchState)
        getRestaurenets()
    }}
    />
    <View >
    <Text> HomeScreen</Text>
    <Button 
        title='Go Back'
        onPress={()=> navigation.goBack()}
    />
    {searchState=='true' ? <Text>{term}</Text> : null }
    {errMessage ? <Text>{errMessage}</Text> : null }
    <Text>Results : {restaurants.length}</Text>
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