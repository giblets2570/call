'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:8080',
  SESSION_SECRET: "yakhubio-secret",
  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  TWILIO_ACCOUNT_ID: 'AC9e540d572431d3af66681b92102093ca',
  TWILIO_AUTH_TOKEN: '9471ecbe5ca0433876c309e242cf2aa5',
  TWILIO_APP_ID: 'APd7337a83448bdab42d9c11c42e41db53',
  TWILIO_NUMBER: '+441143031601',
  AWS_ACCESS_KEY_ID: 'AKIAJN2VFCREKJDHEFPA',
  AWS_SECRET_KEY: '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',
  MAILGUN_API_KEY: 'key-980de07ec8397b5824279634de22d830',
  MAILGUN_DOMAIN: 'app183dcb3d5d6c4a908e15bdaa328d1a8f.mailgun.org',
  MAILGUN_PUBLIC_KEY: 'pubkey-e1ded8e740fc9bbbc06d212ce7dd6110',
  MAILGUN_SMTP_LOGIN: 'postmaster@app183dcb3d5d6c4a908e15bdaa328d1a8f.mailgun.org',
  MAILGUN_SMTP_PASSWORD: '1b29088d865e975524f46c34b61c748e',
  MAILGUN_SMTP_PORT: '587',
  MAILGUN_SMTP_SERVER: 'smtp.mailgun.org',
  REDISCLOUD_URL: 'redis://localhost:6379',
  STRIPE_SECRET_KEY: 'sk_test_ddIVYAh7g5dPUQmT8XZZIPWy',
  STRIPE_PUBLISHABLE_KEY: 'pk_test_XSBpeFPBiqhrvnPnVXp22J4b',
  STRIPE_CLIENT_ID: 'ca_7JIEKR7xDemURNRE0feGgPMqq6DXFT8Z',
  ADMIN_PASSWORD: 'perpetual72'
};
