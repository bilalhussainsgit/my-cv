import axios from 'axios';
import { Base_URL } from '../config/app.config';

const postPersonalInfo = (personalInfo: Object) => {
    return axios
    .post(`${Base_URL}/documents/1/personal_information.json`, personalInfo)
    .then((response) => {return response.data});
}

const CvService = {
    postPersonalInfo
};
  
export default CvService;