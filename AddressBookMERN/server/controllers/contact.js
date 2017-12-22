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

exports.create = async (req, res, next) => {
  try {
    const ctc = await Contact.create(req.body);
    res.statusCode = 201;
    res.json(ctc);
  }
  catch (err) {
    next(err);
  }
};

exports.show = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ctc = await Contact.findById(id);

    if (!ctc) {
      return next();
    }

    res.json(ctc);
  }
  catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ctc = await Contact.findByIdAndRemove(id);

    if (!ctc) {
      return next();
    }

    res.json(ctc);
  }
  catch (err) {
    next(err);
  }
};
