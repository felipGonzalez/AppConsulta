import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { ModeloPregunta } from '../model/ModeloPregunta';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ConsultaService]
})
export class HomePage implements OnInit {

  public text = "06";
  
  
  public list: ModeloPregunta[]=[];

  constructor(private conSer: ConsultaService) {
  }

  ngOnInit() {
     this.loadData();
  }

  public loadData() {
    this.conSer.getPreguntas().subscribe(
      res => {
        this.list  = res["preguntas"];
        console.log(this.list); 
      },
      (error: any) => (this.list = [])
    );
  }

  toogleSection(i) {
    this.list[i].open = !this.list[i].open;     
  }

  getvalue(value:number):string {
    let result = value/100;
    let decimal = result.toFixed(1);
    console.log("El decimal es " + decimal);
    
    return decimal;
  }


}
