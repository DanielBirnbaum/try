import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NavigationComponent } from './comps/general/navigation/navigation.component';
import { LivestockPanelComponent } from './comps/panels/livestock-panel/livestock-panel.component';
import { BirdsPanelComponent } from './comps/panels/birds-panel/birds-panel.component';
import { WildAnimalsPanelComponent } from './comps/panels/wild-animals-panel/wild-animals-panel.component';
import { BirdsCardComponent } from './comps/cards/birds-card/birds-card.component';
import { LivestockCardComponent } from './comps/cards/livestock-card/livestock-card.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { WildAnimalsCardComponent } from './comps/cards/wild-animals-card/wild-animals-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent, 
    LivestockPanelComponent,
    BirdsPanelComponent,
    WildAnimalsPanelComponent,
    BirdsCardComponent,
    LivestockCardComponent,
    FooterComponent,
    PaginatorComponent,
    WildAnimalsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
