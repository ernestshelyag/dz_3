const nodemailer = require('nodemailer');
const config = require('../mailConfig.json');

module.exports.getContact = function (req, res) {
  res.render('pages/contacts', { title: 'Contacts' });
};

module.exports.sendContact = function (req, res, next) {
  // требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.text) {
    // если что-либо не указано - сообщаем об этом
    return res.json({msg: 'Все поля нужно заполнить!', status: 'Error'});
  }
  // инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text:
    req.body.text.trim().slice(0, 500) +
    `\n Отправлено с: <${req.body.email}>`
  };
  // отправляем почту
  transporter.sendMail(mailOptions, function(error, info) {
    // если есть ошибки при отправке - сообщаем об этом
    if (error) {
      return res.json({msg:`При отправке письма произошла ошибка!: ${error}`, status: 'Error'});
    }
    res.json({msg: 'Письмо успешно отправлено!', status: 'Ok'});
  });
};
