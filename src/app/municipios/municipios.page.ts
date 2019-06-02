import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../service/consulta.service';
import { ModeloDatos } from '../model/ModeloDatos';
import { ModeloVotos } from '../model/ModeloVotos';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
  providers: [ConsultaService]
})
export class MunicipiosPage implements OnInit {
 
  titulo:string;
 
  
  searchTerm: string = '';
 

  consulta: any[] = [];
  votos: any[] = [];
  data: any[] = [];
  gen: any[] = [];
  vot: any[] = [];
  votSi: any[] = [];
  votNo: any[] = [];
  list: Array<ModeloDatos>; 
  list2: Array<ModeloDatos>; 


    constructor(private conSer: ConsultaService,private activateRoute: ActivatedRoute) {
      this.list = new Array<ModeloDatos>();
  }

  ngOnInit() {
    this.titulo = this.activateRoute.snapshot.paramMap.get('nombre');
    this.loadData();
  }

  public loadData() {
    this.conSer.getData().subscribe(
      res => {
        for (let i = 0; i < 1122; i++) {
          this.consulta = res[i];
          
          if(this.consulta["departamento"] === this.titulo) {
            var dataModel =  new ModeloDatos();
          var listVotos = new Array<ModeloVotos>();
          dataModel.departamento = this.consulta["departamento"];
          dataModel.codigoD = this.consulta["codigo_departamento"]
          dataModel.municipio = this.consulta["municipio"]
          dataModel.codigoM =  this.consulta["codigo_municipio"]
         

            
          this.votos = this.consulta["votacion"];

         for (let j = 0; j < this.votos.length; j++) {
          
          this.data = this.votos[j];
          this.gen = this.data["gen"];
          this.vot = this.data["vot"];
          this.votSi = this.vot[0];
          this.votNo = this.vot[1];
          
          var dataVotos = new ModeloVotos();
          dataVotos.codigoPregunta = this.gen["cpr"];
         dataVotos.votoValido = this.gen["vva"];
         dataVotos.votoTotal = this.gen["tot"];
         dataVotos.votoNulo = this.gen["vnu"];
         dataVotos.votoNoMarcado = this.gen["tnm"];
         dataVotos.si = this.votSi["vga"];
         dataVotos.no = this.votNo["vga"];
         listVotos.push(dataVotos);
         }
         dataModel.preguntas = listVotos;
          this.list.push(dataModel);
          }
          }
          this.list2 = this.list;
         
      },
      (error: any) => (this.list = [])
    );
  }

  filterItems(searchTerm) {
    return this.list.filter((list) => {
      return list.municipio.toLowerCase().indexOf(
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
