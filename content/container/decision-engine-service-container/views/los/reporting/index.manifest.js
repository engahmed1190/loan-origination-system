'use strict';

const periodic = require('periodicjs');
const utilities = require('../../../utilities');
const cardprops = utilities.views.shared.props.cardprops;
const styles = utilities.views.constants.styles;
const references = utilities.views.constants.references;
const plainHeaderTitle = utilities.views.shared.component.layoutComponents.plainHeaderTitle;
const plainGlobalButtonBar = utilities.views.shared.component.globalButtonBar.plainGlobalButtonBar;
const losTabs = utilities.views.los.components.losTabs;
let randomKey = Math.random;

module.exports = {
  containers: {
    '/los/reporting': {
      layout: {
        component: 'div',
        privileges: [ 101, 102, 103, ],
        props: {
          style: styles.pageContainer,
        },
        children: [
          losTabs('Reporting'),
          // plainGlobalButtonBar({
          //   left: [],
          //   right: [],
          // }),
          {
            component: 'div',
            props: {
              style: {
                marginTop: '1.5rem',
              },
            },
            asyncprops: {
              _children: ['reportingdata', '_children'],
            },
          },
        ],
      },
      resources: {
        reportingdata: '/los/api/reporting?',
        checkdata: {
          url: '/auth/run_checks',
          options: {
            onSuccess: ['func:window.redirect',],
            onError: ['func:this.props.logoutUser', 'func:window.redirect',],
            blocking: true,
            renderOnError: false,
          },
        },
      },
      callbacks: ['func:window.updateGlobalSearchBar',],
      onFinish: 'render',
      pageData: {
        title: 'BrainWise | Lending CRM',
        navLabel: 'Lending CRM',
      },
    },
  },
};