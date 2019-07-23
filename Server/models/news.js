import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts'
    },
    date: String
});

module.exports = mongoose.model('news', schema);

