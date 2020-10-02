/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { CatalogoLinkComponent } from './dashboard/catalogo/catalogo-link/catalogo-link.component';
import { CatalogoNivelComponent } from './dashboard/catalogo/catalogo-nivel/catalogo-nivel.component';
import { VendaDetalheComponent } from './dashboard/venda/venda-detalhe/venda-detalhe.component';
import { VendaComponent } from './dashboard/venda/venda/venda.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent},
    {path: 'catalogo/catalogo-link', component: CatalogoLinkComponent},
    {path: 'catalogo/catalogo-nivel', component: CatalogoNivelComponent},
    {path: 'venda/venda', component: VendaComponent},
    {path: 'venda/venda-detalhe', component: VendaDetalheComponent}
  ]}

];

export const routing = RouterModule.forRoot(routes);

