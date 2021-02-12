'use strict';
const loginManifest = require('../../auth/login.manifest'); 
const forgotForm = require('../../../utilities/views/public/components/forgot_form.js');
const newOrgForm = require('../../../utilities/views/public/components/new_org_form.js');
const resetForm = require('../../../utilities/views/public/components/reset_form.js');
const organizationRecoverForm = require('../../../utilities/views/public/components/recover_organization_form.js');
const styles = require('../../../utilities/views/constants/styles');

module.exports = {
  'containers': {
    '/auth/reset/:token': {
      'layout': loginManifest({
        formLayout: resetForm,
        subtitle: 'Reset Password',
      }),
      'resources': {
        tokendata: '/auth/asyncreset/:token?format=json&entitytype=account',
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Reset Password',
        'navLabel': 'Reset Password',
      },
    },
    '/auth/create-account': {
      'layout': loginManifest({
        formLayout: newOrgForm,
        subtitle: [{
          component: 'p',
          children: 'Create your account',
        }, ],
        subtitleStyle: {
          padding: '20px 30px 0',
        },
      }),
      'resources': {
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Start Your Free Trial',
        'navLabel': 'Start Your Free Trial',
      },
    },
    '/auth/password-reset': {
      'layout': loginManifest({
        formLayout: forgotForm,
        subtitle: 'Reset Password',
      }),
      'resources': {
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Reset Password',
        'navLabel': 'Reset Password',
      },
    },
    '/auth/organization-recovery': {
      'layout': loginManifest({
        formLayout: organizationRecoverForm,
        subtitle: 'Recover Organization',
      }),
      'resources': {
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Recover Organization',
        'navLabel': 'Recover Organization',
      },
    },
    '/auth/sign-in': {
      'layout': loginManifest({
        subtitle: 'Please Sign In',
      }),
      'resources': {
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Sign In',
        'navLabel': 'Sign In',
      },
    },
    // '/sign-in': {
    //   'layout': loginManifest({
    //     subtitle: 'Please Sign In',
    //   }),
    //   'resources': {
    //     successdata: {
    //       url: '/auth/success',
    //       options: {
    //         onSuccess: ['func:window.hideHeader', ],
    //       },
    //     },
    //   },
    //   callbacks: [],
    //   'onFinish': 'render',
    //   'pageData': {
    //     'title': 'BrainWise | Sign In',
    //     'navLabel': 'Sign In',
    //   },
    // },
    '/': {
      'layout': loginManifest({
        subtitle: 'Please Sign In',
      }),
      'resources': {
        signindata: {
          url: '/auth/success',
          options: {
            onSuccess: [ 'func:window.emailVerifiedNotification', ],
            blocking: true, 
            renderOnError: false,
          },
        }, 
        successdata: {
          url: '/auth/success',
          options: {
            onSuccess: ['func:window.hideHeader', ],
          },
        },
      },
      callbacks: [],
      'onFinish': 'render',
      'pageData': {
        'title': 'BrainWise | Sign In',
        'navLabel': 'Sign In',
      },
    },
  },
};