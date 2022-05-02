import { useSelector, useDispatch } from 'react-redux';
//import { useNavigation } from '@react-navigation/native';
import allActions from '../actions'
import axios from 'axios'
// const dispatch = useDispatch()
export const productsApi = () => {
    axios.get(`http://10.0.2.2:3000/api/v1/products`).then((response) => {
                console.log(response.data);
              }).catch((error)=>{
                console.log("Api call error");
                console.log(error.response.data);
                console.log(error.response.status);
             });
}

export const loginRegisterUser = ({dispatch}) => {
  dispatch(allActions.userActions.setToken("some random token"))
    console.log('inside API cal')
}

export const loginApi = () => {
    axios.post(`http://10.0.2.2:3000/api/v1/registrations/2/verify_otp`, {otp: 2155}).then((response) => {
                dispatch(allActions.userActions.setToken(response.data))
              }).catch((error)=>{
                console.log("Api call error");
                console.log(error);
             });
}