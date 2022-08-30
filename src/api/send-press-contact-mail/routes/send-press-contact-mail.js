module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/send-press-contact-mail',
     handler: 'send-press-contact-mail.sendMail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
