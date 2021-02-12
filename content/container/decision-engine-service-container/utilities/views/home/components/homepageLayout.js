'use strict';
const periodic = require('periodicjs');
const CONSTANTS = require('../../constants');
const styles = CONSTANTS.styles;
const THEMESETTINGS = periodic.settings.container[ 'decision-engine-service-container' ];
const capitalize = require('capitalize');
const appGlobalTabs = require('../../shared/component/appGlobalTabs').appGlobalTabs;
const dashboardTable = require('./dashboardTable');
const getResourceList = require('../../../../views/shared/components/overview_data_components').getResourceList;
const cardprops = require('../../../../utilities/views/decision/shared/components/cardProps');

module.exports = {
  'component': 'div',
  'props': {
    style: {
      backgroundColor: styles.application.background,
      height: '100%',
    },
  },
  'children': [
    appGlobalTabs([{
      location: '',
      label: 'Dashboard',
      baseURL: '',
    },], ''),
    {
      'component': 'Container',
      'props': {
        'style': {
          margin: '40px auto 50px',
        },
      },
      'children': [{
        'component': 'Title',
        'props': {
          'size': 'is3',
          style: {
            fontWeight: 400,
          },
        },
        'children': [{
          'component': 'RawStateOutput',
          'props': {
            'select': 'userdata',
            'type': 'inline',
            display: true,
          },
          'thisprops': {
            'userdata': ['user', 'userdata', 'first_name',],
          },
        }, {
          component: 'span',
          children: `, Welcome to the ${THEMESETTINGS.company_name || 'BrainWise'} Digital Lending Platform!`,
        }, 
        ],
      },
      {
        'component': 'Columns',
        'props': {
          'responsive': 'isMobile',
          style: {
            flexWrap: 'wrap',
            padding: '0 5px',
            marginBottom: '40px',
            marginTop: '40px',
          },
        },
        asyncprops: {
          _children: ['homedata', 'homepage',],
        },
      },
      {
        component: 'ResponsiveCard',
        props: cardprops({
          cardTitle: 'Helpful Resources',
        }),
        children: [getResourceList([{
          title: 'User Guide',
          externalIcon: true,
          doubleList: true,
          links: [{
            location: 'https://docs.digifi.io/docs/los-key-features',
            name: 'Key Features',
          }, {
            location: 'https://docs.digifi.io/docs/lending-crm',
            name: 'Lending CRM Guide',
          }, {
            location: 'https://docs.digifi.io/docs/decision-engine',
            name: 'Decision Engine Guide',
          }, {
            location: 'https://docs.digifi.io/docs/ml-models',
            name: 'Machine Learning Guide',
          }, {
            location: 'https://docs.digifi.io/docs/overview-of-text-recognition',
            name: 'OCR Text Recognition Guide',
          }, {
            location: 'https://docs.digifi.io/reference',
            name: 'API Reference',
          }, {
            location: 'https://docs.digifi.io/docs',
            name: 'View All',
            style: {
              fontWeight: 700,
            },
          },],
        }, {
          title: 'BrainWise Support',
          textContent: [{
            name: 'Phone: +202-3576247',
          }, {
            name: 'Email: support@brainwise.me',
          },],
        },
        ]),],
      },
      ],
    },
  ],
};