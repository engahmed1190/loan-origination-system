'use strict';

const utilities = require('../../../../utilities');
const styles = utilities.views.constants.styles;

module.exports = {
  'containers': {
    [ '/ocr/processing/individual/:id' ]: {
      layout: {
        component: 'div',
        props: {
          style: styles.pageContainer,
        },
        asyncprops: {
          _children: ['pagedata', 'layout']
        }
      },
      'resources': {
        [ 'pagedata' ]: '/ocr/api/processing/individual/:id?format=json&type=ocr',
        checkdata: {
          url: '/auth/run_checks',
          settings: {
            onSuccess: [ 'func:window.redirect', ],
            onError: [ 'func:this.props.logoutUser', 'func:window.redirect', ],
            blocking: true,
            renderOnError: false,
          },
        },
      },
      'callbacks': [ 'func:window.globalBarSaveBtn', 'func:window.setHeaders', ],
      pageData: {
        title: 'BrainWise | OCR Text Recognition',
        navLabel: 'OCR Text Recognition',
      },
      'onFinish': 'render',
    },
  },
};
