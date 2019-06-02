import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModeloPregunta } from '../model/ModeloPregunta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  consulta: Object[] = [];
  votos: any[] = [];
  data: any[] = [];
  gen: any[] = [];
  vot: any[] = [];
  votSi: any[] = [];
  votNo: any[] = [];
  list: ModeloPregunta[]=[];


  constructor(private http:HttpClient) { 
  }

  cargarConsulta () {
    this.http.get('assets/data/consulta.json')
              .subscribe( res => {
                this.consulta = res[0];
               /* for (let i = 0; i < 1191; i++) {
                  this.consulta = res[i];
                  console.log(res);
                console.log(this.consulta);
                console.log(this.consulta["departamento"]);
                console.log(this.consulta["votacion"]);
                }*/
                console.log(res);
                console.log("Departamento : " + this.consulta["departamento"]);
                console.log("Codigo departamento : " + this.consulta["codigo_departamento"]);
                console.log("Municipio : " + this.consulta["municipio"]);
                console.log("Codigo del municipio : " + this.consulta["codigo_municipio"]);
                this.votos = this.consulta["votacion"];
               /*
                 for (let j = 0; j < this.votos.length; j++) {
                  this.data = this.votos[j];
                  console.log("Voto " + this.votos[0]);
                  console.log(this.data["gen"]);
                  this.gen = this.data["gen"];
                  console.log("Codigo de la pregunta  " + this.gen["cpr"]);
                  console.log("Votos validos  " + this.gen["vva"]);
                  console.log("Votos totales  " + this.gen["tot"]);
                  console.log("Votos nulos  " + this.gen["vnu"]);
                  console.log("Votos no marcados  " + this.gen["tnm"]);
                  console.log(this.data["vot"]);
                 }
                */
                this.data = this.votos[0];
                this.gen = this.data["gen"];
                console.log("Codigo de la pregunta  " + this.gen["cpr"]);
                console.log("Votos validos  " + this.gen["vva"]);
                console.log("Votos totales  " + this.gen["tot"]);
                console.log("Votos nulos  " + this.gen["vnu"]);
                console.log("Votos no marcados  " + this.gen["tnm"]);
                
                
                this.vot = this.data["vot"];
                this.votSi = this.vot[0];
                this.votNo = this.vot[1];
                console.log(this.votSi["dga"] + " : " + this.votSi["vga"]);
                console.log(this.votNo["dga"] + " : " + this.votNo["vga"]);
                
              });
  }

  public  getPreguntas(): Observable<ModeloPregunta[]> {
      return this.http.get<ModeloPregunta[]>("assets/data/datos.json");
     
  }

  public  getData() {
    return this.http.get("assets/data/consulta.json");
   
}

  

 }
