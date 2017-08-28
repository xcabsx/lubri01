import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';


@Component({
 selector:'productos-list',
 templateUrl:'../views/productos-list.html',
 providers: [ProductoService]

 })

export class ProductosListComponent implements OnInit {
 public titulo:string;
 public productos:Producto[];
 public confirmado;

 constructor(
  private _route : ActivatedRoute,
  private _router : Router,
  private _productoService: ProductoService

  ) {
  this.confirmado = null;
  this.titulo = 'Listado de producto';


 }

  ngOnInit() {
  console.log('pdoctutos list.component.ts cargado');
  this.getProductos();
  }

getProductos() {

  this._productoService.getProductos().subscribe(
    result => {
      if (result.code !== 200) {
        console.log(result);
      }else {
        this.productos = result.data;
      }
      },
      error => {
      console.log(<any>error);
    });

}

	borrarConfirm(id){
		this.confirmado = id;

	}

	cancelarConfirm(){
		this.confirmado = null;

	}

	onDeleteProducto(id){

		this._productoService.deleteProducto(id).subscribe(
			response => {
				if(response.code == 200){
					this.getProductos();
					}else{
						alert("error al borrar el producto");
					}


				},
				error =>{
					console.log(<any>error)
				}
			);

	}
}
