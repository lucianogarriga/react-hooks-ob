import AxiosConfig from '../utils/config/axios.config'; 

export function getRandomUsers (){
    return AxiosConfig.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); 
}