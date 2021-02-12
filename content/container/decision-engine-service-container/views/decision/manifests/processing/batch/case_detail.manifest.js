// 'use strict';

// const utilities = require('../../../../../utilities');
// const shared = utilities.views.shared;
// const formElements = shared.props.formElements.formElements;
// const cardprops = shared.props.cardprops;
// const styles = utilities.views.constants.styles;
// const simpleAsyncHeaderTitle = utilities.views.shared.component.layoutComponents.simpleAsyncHeaderTitle;
// const formGlobalButtonBar = utilities.views.shared.component.globalButtonBar.formGlobalButtonBar;
// const decisionTabs = utilities.views.decision.shared.components.decisionTabs;
// const strategyProcessingTabs = utilities.views.decision.shared.components.strategyProcessingTabs;
// let randomKey = Math.random;

// module.exports = {
//   'containers': {
//     [ '/decision/processing/batch/results/:id/:case_id' ]: {
//       layout: {
//         component: 'div',
//         props: {
//           style: styles.pageContainer,
//         },
//         children: [
//           decisionTabs('processing/individual/run'),
//           simpleAsyncHeaderTitle({
//             type: 'page',
//             title: true,
//           }),
//           styles.fullPageDivider,
//           strategyProcessingTabs('batch'),
//           {
//             component: 'Container',
//             props: {
//               className: 'simulation',
//             },
//             asyncprops: {
//               _children: [ 'pagedata', 'pageLayout', ],
//             },
//           }, ],
//       },
//       'resources': {
//         [ 'pagedata' ]: '/simulation/api/batch/results/:id/:case_id?format=json',
//         checkdata: {
//           url: '/auth/run_checks',
//           settings: {
//             onSuccess: [ 'func:window.redirect', ],
//             onError: [ 'func:this.props.logoutUser', 'func:window.redirect', ],
//             blocking: true,
//             renderOnError: false,
//           },
//         },
//       },
//       'callbacks': [ 'func:window.globalBarSaveBtn', 'func:window.setHeaders', ],
//       pageData: {
//         'title': 'BrainWise | ML Rules Engine',
//         'navLabel': 'ML Rules Engine',
//       },
//       'onFinish': 'render',
//     },
//   },
// };
