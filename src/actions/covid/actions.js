import api from '../../services/api';

export const findCasosAcumulados = async () => {  
    return new Promise((resolve, reject) => {
      api.get(`/prod/PortalCasos`)
      .then(response => {
        resolve(response.status === 200 && response.data);
      })
    }) 
};