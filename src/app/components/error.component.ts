import{ Component, OnInit } from '@angular/core';

@Component({
	selector: 'error',
	templateUrl: '../views/error.html'


	})

export class ErrorComponent implements OnInit{
	public titulo:string;

	contructor() {
		this.titulo = 'Error .página no encontrada.'
	}

	ngOnInit(){
		console.log("error cargado.");
	}

}
