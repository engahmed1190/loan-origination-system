'use strict';

const periodic = require('periodicjs');
const utilities = require('../../../../utilities');
const cardprops = utilities.views.shared.props.cardprops;
const styles = utilities.views.constants.styles;
const references = utilities.views.constants.references;
const buttonAsyncHeaderTitle = utilities.views.shared.component.layoutComponents.buttonAsyncHeaderTitle;
const plainGlobalButtonBar = utilities.views.shared.component.globalButtonBar.plainGlobalButtonBar;
const losTabs = utilities.views.los.components.losTabs;
const peopleTabs = utilities.views.los.components.peopleTabs;
const peopleNotes = utilities.views.los.components.peopleNotes;
let randomKey = Math.random;

module.exports = {
  containers: {
    '/los/people/:id/communications': {
      layout: {
        component: 'div',
        privileges: [ 101, 102, 103, ],
        props: {
          style: styles.pageContainer,
        },
        children: [
          losTabs('Customers'),
          buttonAsyncHeaderTitle({
            type: 'people',
            title: true,
          }, {
            component: 'ResponsiveButton',
            props: {
              onclickProps: {
                title: 'Edit Name',
                pathname: '/los/people/:id/rename',
                params: [{
                  key: ':id',
                  val: '_id',
                }, ],
              },
              onClick: 'func:this.props.createModal',
              spanProps: {
                className: '__ra_rb button_page_title'
              },
            },
            asyncprops: {
              onclickPropObject: ['peopledata', 'person'],
              children: ['peopledata', 'data', 'display_title'],
            },
          }),
          peopleTabs('communications'),
          plainGlobalButtonBar({
            left: [ {
              component: 'ResponsiveButton',
              asyncprops: {
                onclickPropObject: [ 'peopledata', 'person' ],
              },
              props: {
                onClick: 'func:this.props.createModal',
                onclickProps: {
                  title: 'Create Communication',
                  pathname: '/los/communications/new',
                },
                buttonProps: {
                  color: 'isSuccess',
                },
              },
              children: 'ADD COMMUNICATION',
            }, ],
            right: [ ],
          }),
          {
            component: 'Container',
            props: {
              style: {},
            },
            children: [ {
              component: 'ResponsiveCard',
              props: cardprops({
                cardTitle: 'Communications',
                cardStyle: {
                  marginBottom: 0,
                },
              }),
              children: [ {
                component: 'ResponsiveTable',
                asyncprops: {
                  rows: [ 'peopledata', 'rows', ],
                  numItems: [ 'peopledata', 'numItems', ],
                  numPages: [ 'peopledata', 'numPages', ],
                  baseUrl: [ 'peopledata', 'baseUrl' ],
                  filterButtons: [ 'peopledata', 'filterButtons' ],
                },
                props: {
                  useRowProps: true,
                  label: ' ',
                  dataMap: [ {
                    'key': 'rows',
                    value: 'rows',
                  }, {
                    'key': 'numItems',
                    value: 'numItems',
                  }, {
                    'key': 'numPages',
                    value: 'numPages',
                  },
                  ],
                  limit: 50,
                  filterSearch: true,
                  simplePagination: true,
                  useHeaderFilters: true,
                  hasPagination: true,
                  calculatePagination: true,
                  flattenRowData: true,
                  useInputRows: true,
                  addNewRows: false,
                  'tableSearch': true,
                  'simpleSearchFilter': true,
                  filterSearchProps: {
                    icon: 'fa fa-search',
                    hasIconRight: false,
                    className: 'global-table-search',
                    placeholder: 'SEARCH COMMUNICATIONS',
                  },
                  ignoreTableHeaders: [ '_id', ],
                  headers: [ {
                    label: 'Date',
                    sortid: 'date',
                    sortable: true,
                    value: ' ',
                  }, {
                    label: 'Type',
                    sortid: 'type',
                    sortable: true,
                    headerColumnProps: {
                      style: {
                        width: '15%',
                      },
                    },
                  }, {
                    label: 'Team Members',
                    sortid: 'team_members',
                    sortable: false,
                  }, {
                    label: 'People',
                    sortid: 'people',
                    sortable: false,
                  }, {
                    label: 'Subject',
                    sortid: 'subject',
                    sortable: true,
                  },
                  {
                    label: ' ',
                    headerColumnProps: {
                      style: {
                        width: '80px',
                      },
                    },
                    columnProps: {
                      style: styles.buttonCellStyle,
                    },
                    buttons: [ {
                      passProps: {
                        buttonProps: {
                          icon: 'fa fa-pencil',
                          className: '__icon_button',
                        },
                        onClick: 'func:this.props.createModal',
                        onclickProps: {
                          title: 'Edit Communication',
                          pathname: '/los/communications/:id',
                          params: [ { 'key': ':id', 'val': '_id', }, ],
                        },
                      },
                    }, {
                      passProps: {
                        buttonProps: {
                          icon: 'fa fa-trash',
                          color: 'isDanger',
                          className: '__icon_button',
                        },
                        onClick: 'func:this.props.fetchAction',
                        onclickBaseUrl: '/los/api/communications/:id',
                        onclickLinkParams: [ { 'key': ':id', 'val': '_id', }, ],
                        fetchProps: {
                          method: 'DELETE',
                        },
                        successProps: {
                          success: {
                            notification: {
                              text: 'Changes saved successfully!',
                              timeout: 10000,
                              type: 'success',
                            },
                          },
                          successCallback: 'func:this.props.refresh',
                        },
                        confirmModal: Object.assign({}, styles.defaultconfirmModalStyle, {
                          title: 'Delete Communication',
                          textContent: [ {
                            component: 'p',
                            children: 'Do you want to delete this communication?',
                            props: {
                              style: {
                                textAlign: 'left',
                                marginBottom: '1.5rem',
                              },
                            },
                          },
                          ],
                        }),
                      },
                    },
                    ],
                  },
                  ],
                },
              }, ],
            },
              // peopleNotes,
            ],
          },
        ],
      },
      resources: {
        notedata: '/los/api/customers/:id/notes?entity_type=person',
        peopledata: '/los/api/customers/people/:id/communications?paginate=true',
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
      callbacks: [ 'func:window.updateGlobalSearchBar', ],
      onFinish: 'render',
      pageData: {
        title: 'BrainWise | Lending CRM',
        navLabel: 'Lending CRM',
      },
    },
  },
};