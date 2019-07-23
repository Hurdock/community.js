import * as yup from 'yup';
import striptags from 'striptags';
import accounts from '../models/accounts';

export const registerSchema = yup.object().shape({
  username: yup.string().min(2).max(50).required(),
  password: yup.string().min(2).max(50).required(),
  email: yup.string().email().required()
});

export const loginSchema = yup.object().shape({
  username: yup.string().min(2).max(50).required(),
  password: yup.string().min(2).max(50).required(),
});

export const newsSchema = yup.object().shape({
  title: yup.string().min(4).max(50).required(),
  content: yup.string().min(4).max(500).required(),
});

export function sanitized(form) {
  let inputs = Object.values(form), xss = inputs.filter(elm => elm === striptags(elm));
  if(inputs.length != xss.length) return false;
  return true;
}

export async function isAdmin(id, level) {
  const acc = await accounts.find({ _id: id});
  if(acc.admin >= level) return true;
  return false;
}