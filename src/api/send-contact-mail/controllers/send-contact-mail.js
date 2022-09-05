"use strict";

/**
 * A set of functions called "actions" for `send-contact-mail`
 */

module.exports = {
  sendMail: async (ctx, next) => {
    try {
      const { subject, message, name, email, role } = ctx.request.body;

      let send = await strapi.plugins["email"].services.email.send({
        to: process.env.CONTACT_TO_EMAIL_ADDRESS,
        subject: subject,
        replyTo: email,
        text: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        <p>Message: ${message}</p>
        `,
        html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        <p>Message: ${message}</p>
        `,
      });

      ctx.body = {
        error: false,
        message: "Contact mail sent successfully.",
      };
    } catch (err) {
      ctx.body = {
        error: true,
        message: "Contact mail sending failed.",
      };
    }
  },
};
