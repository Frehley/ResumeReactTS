import axios from "axios";

type data = {
    name: string;
    email: string;
    message: string;
};


const dataSend = {
    contactFormName: '',
    contactFormEmail: '',
    contactFormSubject: '',
    contactFormMessage: '',
    contactFormCopy: ''
};


class sendMessageService {
    sendMessage = (data: data) => {

        dataSend.contactFormName = data.name;
        dataSend.contactFormEmail = data.email;
        dataSend.contactFormSubject = 'Mensage desde cv.diegoz.ar';
        dataSend.contactFormMessage = data.message;
        dataSend.contactFormCopy = '';

        console.log('hola', dataSend);

        return axios.request({method: 'post', baseURL: 'https://mail-server-zeta.vercel.app', url: `/send`, data: dataSend});

    };


}

export default new sendMessageService();