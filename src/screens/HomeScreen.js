import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet, Button} from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import ResultList from '../components/ResultsList'


const HomeScreen = ({navigation}) => {

    const [term,setTerm] = useState('')
    const [searchState,setSearchState] = useState('false')
    const [restaurants,getRestaurenets,errMessage] = useRestaurants()
   
    const getFilteredRestaurents = (price) => {
      return  restaurants.filter(restaurent => {
            return restaurent.price === price
        })
    }

return <View style = {styles.mainContainer}>
    <SearchBar 
        term = {term}
        onTermChanged = {(newTerm)=> setTerm(newTerm)}
        onFinished = {(searchState) => {
        setSearchState(searchState)
        getRestaurenets(term)
    }}
    />
    <View >
    <Text> HomeScreen</Text>
  
   {/*  <Button 
        title='Go Back'
        onPress={()=> navigation.goBack()}
    /> */}

    {searchState=='true' ? <Text>{term}</Text> : null }
    {errMessage ? <Text>{errMessage}</Text> : null }
    <Text>Results : {restaurants.length}</Text>

    <ResultList restaurents = {getFilteredRestaurents('£')}
    title={'Economy'}/>
    <ResultList restaurents = {getFilteredRestaurents('££')}
    title={'Medium'}/>
    <ResultList restaurents = {getFilteredRestaurents('£££')}
    title={'Business'}/>

    </View>
</View>
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        padding: 10,
        flex :1
    },

})

export default HomeScreen