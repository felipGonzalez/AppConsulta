import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../service/consulta.service';
import { ModeloDatos } from '../model/ModeloDatos';
import { ModeloVotos } from '../model/ModeloVotos';
import { ModelDepartmen } from '../model/ModelDepartmen';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  providers: [ConsultaService]
})
export class ListPage implements OnInit {
  
  searchTerm: string = '';
 

  consulta: any[] = [];
  votos: any[] = [];
  data: any[] = [];
  gen: any[] = [];
  vot: any[] = [];
  votSi: any[] = [];
  votNo: any[] = [];
  list: Array<ModelDepartmen>; 
  list2: Array<ModelDepartmen>; 


    constructor(private conSer: ConsultaService) {
      this.list = new Array<ModelDepartmen>();
     
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.conSer.getData().subscribe(
      res => {
        console.log( this.consulta = res[0]);
        let departamento = "";
        let aux = "" ;


        for (let i = 0; i < 1122; i++) {
          this.consulta = res[i];
          
          aux = this.consulta["departamento"] ;
         
          if(aux != departamento) {
             var departamentMode = new ModelDepartmen();
            departamentMode.nombre = aux;
            this.list.push(departamentMode);
          }       
          departamento = aux;
         }
          this.list2 = this.list;
         
      },
      (error: any) => (this.list = [])
    );
  }


 

  filterItems(searchTerm) {
    return this.list.filter((list) => {
      return list.nombre.toLowerCase().indexOf(
        searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    console.log(this.searchTerm);
    
    this.list2 = this.filterItems(this.searchTerm);
    if(this.list2.length === 0) {
      this.list2 = this.list;
    }
    }

    toogleSection(i) {
      this.list[i].open = !this.list[i].open;     
    }

}
