import axios from 'axios';
import { Base_URL } from '../config/app.config';

const postPersonalInfo = (personalInfo: Object) => {
    return axios
    .post(`${Base_URL}/documents/1/personal_information.json`, { ...personalInfo, })
    .then((response) => {return response.data});
}

const getPersonalInfo = (userId: any) => {
    axios
    .get(`${Base_URL}/documents/3/personal_information.json`)
    .then((response) => {console.log(response.data)})
    .catch((error)=> console.log(`I am error => ${error}`));
}

const CvService = {
    postPersonalInfo,
    getPersonalInfo
};
  
export default CvService;