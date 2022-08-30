module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/send-contact-mail',
     handler: 'send-contact-mail.sendMail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
