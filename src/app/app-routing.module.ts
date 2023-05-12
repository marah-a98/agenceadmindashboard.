import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './components/agent/agent.component';
import { DetailsagentComponent } from './components/agent/detailsagent/detailsagent.component';
import { ListeagentComponent } from './components/agent/listeagent/listeagent.component';
import { BilletComponent } from './components/billet/billet.component';
import { DetailbilletComponent } from './components/billet/detailbillet/detailbillet.component';
import { ListbilletComponent } from './components/billet/listbillet/listbillet.component';
import { ClientComponent } from './components/client/client.component';
import { DetailsComponent } from './components/client/details/details.component';
import { ListclientComponent } from './components/client/listclient/listclient.component';
import { HomeComponent } from './components/home/home.component';
import { DetailhotelComponent } from './components/hotel/detailhotel/detailhotel.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ListhotelComponent } from './components/hotel/listhotel/listhotel.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './content/content.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"home", component:HomeComponent,canActivate:[AuthGuard],

  children:[{path:"agent",component:AgentComponent},
  {path:"listagent",component:ListeagentComponent},
  {path:"client",component:ClientComponent},
  {path:"listclient",component:ListclientComponent},
  {path:"billet",component:BilletComponent},
  {path:"listbillet",component:ListbilletComponent},
  {path:"hotel",component:HotelComponent},
  {path:"listhotel",component:ListhotelComponent},
  {path:"details/:id_client",component:DetailsComponent},
  {path:"detailagent/:id_agent",component:DetailsagentComponent},
  {path:"detailbillet/:id_billet",component:DetailbilletComponent},
  {path:"detailhotel/:id_hotel",component:DetailhotelComponent},
]},
    //based path//
  {path:"login",component:LoginComponent,canActivate:[LogoutGuard]},
  {path:"content",component:ContentComponent},
  {path:"sidebar",component:SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
