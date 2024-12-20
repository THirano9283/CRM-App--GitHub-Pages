import { redirect } from 'react-router-dom';
import MasterView from './master-view/master-view';
import { routes as masterViewRoute } from './master-view/master-view-routes';
import IgView1 from './ig-view1/ig-view1';
import IgView2 from './ig-view2/ig-view2';

export const routes = [
  { index: true, loader: () => redirect('master-view') },
  { path: 'master-view', element: <MasterView />, text: 'Master View', children: masterViewRoute },
  { path: 'ig-view1', element: <IgView1 />, text: 'Ig View1' },
  { path: 'ig-view2', element: <IgView2 />, text: 'Ig View2' }
];
