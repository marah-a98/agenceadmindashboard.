import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './components/client/client.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { BilletComponent } from './components/billet/billet.component';
import { AgentComponent } from './components/agent/agent.component';
import { ListeagentComponent } from './components/agent/listeagent/listeagent.component';
import { ListclientComponent } from './components/client/listclient/listclient.component';
import { ListhotelComponent } from './components/hotel/listhotel/listhotel.component';
import { DetailsComponent } from './components/client/details/details.component';
import { ListbilletComponent } from './components/billet/listbillet/listbillet.component';
import { DetailsagentComponent } from './components/agent/detailsagent/detailsagent.component';
import { DetailbilletComponent } from './components/billet/detailbillet/detailbillet.component';
import { DetailhotelComponent } from './components/hotel/detailhotel/detailhotel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecherchePipe } from './pipes/recherche.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ClientComponent,
    HotelComponent,
    BilletComponent,
    AgentComponent,
    ListeagentComponent,
    ListclientComponent,
    ListhotelComponent,
    DetailsComponent,
    ListbilletComponent,
    DetailsagentComponent,
    DetailbilletComponent,
    DetailhotelComponent,
    RecherchePipe,
    
   
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
