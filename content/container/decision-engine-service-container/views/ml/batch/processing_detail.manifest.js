'use strict';

const utilities = require('../../../utilities');
const shared = utilities.views.shared;
const formElements = shared.props.formElements.formElements;
const cardprops = shared.props.cardprops;
const styles = utilities.views.constants.styles;
const plainHeaderTitle = utilities.views.shared.component.layoutComponents.plainHeaderTitle;
const formGlobalButtonBar = utilities.views.shared.component.globalButtonBar.formGlobalButtonBar;
const mlTabs = utilities.views.ml.components.mlTabs;
const mlProcessingTabs = utilities.views.ml.components.mlProcessingTabs;
let randomKey = Math.random;

module.exports = {
  containers: {
    '/ml/processing/batch/:id': {
      layout: {
        component: 'div',
        props: {
          style: styles.pageContainer,
        },
        asyncprops: {
          _children: ['setupdata', 'layout']
        }
        // children: [
        //   mlTabs('processing/individual'),
        //   plainHeaderTitle({
        //     title: [ {
        //       component: 'span',
        //       children: 'Decision Processing',
        //     }, ],
        //     subtitle: 'Use your model to make decisions that replace or enhance human judgement',
        //   }),
        //   mlProcessingTabs('batch'),
        //   {
        //     component: 'Container',
        //     props: {
        //       style: {},
        //     },
        //     asyncprops: {
        //       _children: ['setupdata', 'mlbatchPage', ],
        //     },
        //   },
        // ],
      },
      resources: {
        setupdata: '/ml/api/batch/run/:id?type=ml',
        simulationdata: '/ml/api/batch/simulations?pagination=mlbatches',
        checkdata: {
          url: '/auth/run_checks',
          options: {
            onSuccess: ['func:window.redirect',],
            onError: ['func:this.props.logoutUser', 'func:window.redirect', ],
            blocking: true, 
            renderOnError: false,
          },
        },
      },
      callbacks: [ 'func:window.setHeaders', 'func:window.filterDataSourceFile',  ],
      onFinish: 'render',
      pageData: {
        title: 'BrainWise | Machine Learning',
        navLabel: 'Machine Learning',
      },
    },
  },
};
