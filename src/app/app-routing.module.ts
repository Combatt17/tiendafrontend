import { NgModule } from "@angular/core";
import { Routes,  RouterModule} from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CarritoComponent } from "./views/carrito/carrito.component";
import { HomeComponent } from "./views/home/home.component";
import { PedidosComponent } from "./views/pedidos/pedidos.component";
import { ProductosComponent } from "./views/productos/productos.component";

const routes:Routes=[
 {path: "",component:HomeComponent},   
 {path:"carrito",component:CarritoComponent },  
 {path:"pedidos",component:PedidosComponent}, 
 {path:"productos",component:ProductosComponent}, 
 {path:"login",component:LoginComponent},    
 {path:"register",component:RegisterComponent}    
]


@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]


})


// vamos a crear la clase AppRoutingModule
export class AppRoutingModule{




}