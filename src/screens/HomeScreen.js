import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'
import ResultList from '../components/ResultsList'


const HomeScreen = () => {

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
    <View style={{flex: 1}}>
  
    {errMessage ? <Text>{errMessage}</Text> : null }
    <ScrollView style={{flexGrow: 1}}>
        <ResultList restaurents = {getFilteredRestaurents('£')}
        title={'Cost Effective'}
        />
        <ResultList restaurents = {getFilteredRestaurents('££')}
        title={'Bit Pricer'}
        />
        <ResultList restaurents = {getFilteredRestaurents('£££')}
        title={'Spender'}
        />
    </ScrollView>

    </View>
</View>
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        padding: 10,
        flex : 1,
    },

})

export default HomeScreen