const Contact = require('../models/contact');

exports.list = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, 'prenom nom');
    res.json(contacts);
  }
  catch (err) {
    next(err);
  }
};

exports.create = (req, res, next) => {
  req.body // Contact.create
  next(new Error('create not implemented'));
};

exports.show = (req, res, next) => {
  const id = req.params.id;

  next(new Error('show not implemented'));
};


exports.delete = (req, res, next) => {
  const id = req.params.id;

  next(new Error('delete not implemented'));
};
