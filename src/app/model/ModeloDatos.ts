import { ModeloVotos } from './ModeloVotos';

export class ModeloDatos {
    public departamento:string = "";
    public codigoD:string = "";
    public municipio:string = "";
    public codigoM:string = "";
    public open= false;
    public preguntas: Array<ModeloVotos>;

    constructor() {
    }
}