'use strict';

const utilities = require('../../utilities');
const styles = utilities.views.constants.styles;


module.exports = {
  containers: {
    '/ml/models/:id/comparison_charts/:idx': {
      layout: {
        privileges: [101, 102, 103],
        component: 'div',
        props: {
          style: styles.pageContainer,
        },
        asyncprops: {
          _children: ['mlmodeldata', '_children'],
        },
      },
      resources: {
        mlmodeldata: '/ml/api/models/:id/analysis_charts/:idx?format=json&page=comparison_charts',
        checkdata: {
          url: '/auth/run_checks',
          options: {
            onSuccess: [ 'func:window.redirect', ],
            onError: [ 'func:this.props.logoutUser', 'func:window.redirect', ],
            blocking: true,
            renderOnError: false,
          },
        },
      },
      callbacks: [
        'func:window.setHeaders',
      ],
      onFinish: 'render',
      pageData: {
        title: 'BrainWise | Machine Learning',
        navLabel: 'Machine Learning',
      },
    },
  },
};