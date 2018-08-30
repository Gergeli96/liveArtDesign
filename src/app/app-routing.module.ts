import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "src/app/landing-page/landing-page.component";
import { GaleryComponent } from "src/app/galery/galery.component";
import { BossComponent } from "src/app/boss/boss.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "galery", component: GaleryComponent },
  { path: "boss", component: BossComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
