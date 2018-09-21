import axios from 'axios';

const domain = process.env.DOMAIN;

export const checkEmailExists = email =>
   axios.get(`${domain}/api/auth/exists/email/${email}`);
export const checkNicknameExists = nickname =>
   axios.get(`${domain}/api/auth/exists/nickname/${nickname}`);

export const localRegister = ({ email, nickname }) =>
   axios.post(`${domain}/api/auth/register`, { email, nickname });
export const localLogin = ({ email }) => axios.post();
