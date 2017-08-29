import{ Component, OnInit } from '@angular/core';

@Component({
	selector:'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent {
	public titulo:string;

		constructor(){
			this.titulo= 'webap productos';

		}

		ngOnInit(){
			console.log('Se ha cargado el componente home');
		}

	};
