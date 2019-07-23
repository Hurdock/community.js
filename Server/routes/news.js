import express from 'express';
import news from '../models/news';
const router = express.Router();
import { newsSchema, sanitized, isAdmin } from '../utils/validations';

router.get('/getCountedNews', async(req,res) => {
  const number = await news.estimatedDocumentCount({});
  res.json(number);
});

router.get('/getNews/:page', async (req, res) => {
  const articles = await news.find({}, null, { skip: parseInt(req.params.page - 1) * 10, limit: 10}).sort({ date: -1 }).populate('author');
  res.json(articles);
});

router.post('/create', async (req, res) => {
  const form = req.body.form;
  const valid = await newsSchema.isValid(form);
  if(!req.session.user) return res.json({ error: 'You must be logged in in order to create news.'});
  if(!isAdmin(req.session.user, 1)) return res.status(500).json({ error: `Only administrators can post news.` });
  if(!valid) return res.status(500).json({ error: 'Error occured during validation on the server.' });
	if(!sanitized({ title: form.title})) res.status(500).json({ error: 'Please avoid using HTML tags inside inputs.' });
  const article = new news({
		title: form.title,
		content: form.content,
    author: req.session.user,
    date: new Date()
	});
  article.save(() => res.status(200).send()); 
});

export default router;