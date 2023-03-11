const { validationResult } = require('express-validator');
const path = require('path');
const User = require('../models/User');
const sendMail = require('../utils/sendMail');

const get = (req, res) => {
  console.log('req.flash', req.flash());
  res.render('signup', {
    flash: req.flash(),
    errors: [],
  });
};
const post = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('signup', {
      flash: req.flash(),
      errors: errors.array(),
    });
  }

  const existanceUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (existanceUser) {
    req.flash('warning', 'This user already exists.');
    res.render('signup', {
      flash: req.flash(),
      errors: [],
    });
    return;
  }

  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: await User.encryptPassword(req.body.password),
    age: 0,
  });

  const html = await ejs.renderFile(
    path.join(__dirname, '../views/mail/auth.ejs'),
    {
      title: 'Welcome',
      description:
        'Ad reprehenderit enim quis sunt proident sunt in elit. Veniam occaecat reprehenderit et excepteur ipsum Lorem elit laboris. Tempor duis officia voluptate exercitation laboris nulla do Lorem eiusmod ipsum. Id amet consequat occaecat ullamco enim mollit ad anim officia dolor sunt quis consectetur. Irure sit ex eu tempor labore veniam voluptate non magna. Tempor magna nostrud ut qui voluptate amet magna. Est occaecat occaecat est esse consequat tempor aliquip duis fugiat irure veniam.',
    }
  );

  await sendMail({
    to: req.body.email,
    subject: 'Account created successfully',
    html,
  });
  res.render('signup', {
    flash: req.flash(),
    errors: [],
  });
};

module.exports = {
  get,
  post,
};
