module.exports = ({env}) => ({
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: env('CAPTCHA_SECRET_KEY'),
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: env('NOTIFICATION_EMAIL')
          }
        }
      ]
    }
  },
  ckeditor: true

});
