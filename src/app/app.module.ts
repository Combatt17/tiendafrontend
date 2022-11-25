import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardComponent } from './Components/card/card.component';
import { HeadeComponent } from './Components/heade/heade.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { HomeComponent } from './views/home/home.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { ProductosComponent } from './views/productos/productos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
     CardComponent,
      HeadeComponent,
       CarritoComponent,
        HomeComponent, PedidosComponent, ProductosComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
