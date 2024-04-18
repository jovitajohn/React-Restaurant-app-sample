import React,{useState,useEffect} from 'react'
import Yelp from '../api/Yelp'

export default()=>{
    const [restaurants,setRestaurents] = useState([])
    const [errMessage,setErrMessage]= useState('')

    const getRestaurenets  = async (keyWord)=> {
        try{
        const response = await Yelp.get('/search',{
            params:{
                limit:20,
                term: keyWord,
                location: 'Edinburgh, UK'
            }
        })
        setRestaurents(response.data.businesses)
        //console.log(response.data.businesses)
        }catch(err){
            setErrMessage('Something went wrong! Try again later!')
        }   
    }

    useEffect (() =>{getRestaurenets('pizza')},[])

    return [restaurants,getRestaurenets,errMessage]
}