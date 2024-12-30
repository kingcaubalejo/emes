import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'People',
    url: '/people',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Pastors',
        url: '/people/pastors',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Leaders',
        url: '/people/leaders',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Campers',
        url: '/people/campers',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Groups',
    url: '/groups',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Churches',
        url: '/groups/churches',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Teams',
        url: '/groups/teams',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Schedules & Plans',
    url: '/schedule-and-plans',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Reports',
    iconComponent: { name: 'cil-star' },
    url: '/reports',
    children: [
      {
        name: 'Camper Ids',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'info',
          text: 'NEW'
        }
      }
    ]
  }
];
