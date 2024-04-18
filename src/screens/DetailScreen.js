import React,{useState,useEffect} from "react";
import {Text,StyleSheet,FlatList,Image} from 'react-native'
import Yelp from "../api/Yelp";

const DetailScreen = ({route,navigation})=> {
    
    const {restaurant} = route.params
    const [restaurentDetail,setRestaurenent] = useState(null)
    
    console.log(restaurentDetail)

    const getRestaurentDetail = async(id) =>{
        const response = await Yelp.get(`/${id}`)
        setRestaurenent(response.data)
    }
    useEffect(()=>{
        getRestaurentDetail(restaurant.id)
    },[])

    if(!restaurentDetail){
        return null
    }
    return <>
        <Text>Detail screen : {restaurant.name}</Text>
        <Text>Test: {restaurentDetail.name}</Text>
        {restaurentDetail.is_closed === 'true' ? <Text>Closed</Text> : <Text>Open</Text>}
        <Text>Phone : {restaurentDetail.phone}</Text>
        <Text>Address : {restaurentDetail.location.display_address}</Text>
             
            
        {(restaurentDetail.photos != null)? 
        (<FlatList 
            data = {restaurentDetail.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({item}) => {
                return <View>
                    <Image source={{uri : item}}/>
                    </View>
                 }}
        />):
         (<>
        <Text> test</Text>
             <Text>location : {restaurentDetail.location}</Text>
             <Text>Phone : {restaurentDetail.phone}</Text>
             restaurentDetail.is_open_now ? <Text>Open</Text> : <Text> Closed</Text>

            </>
        ) 
        }
    </>
}

const styles = StyleSheet.create({

})

export default DetailScreen