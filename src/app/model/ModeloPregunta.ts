export class ModeloPregunta {
    public pregunta : string;
    public titulo : string;
    public codigo : string;
    public si : string;
    public no : string;
    public siUmbral : number;
    public noUmbral : number;
    public nulos : string;
    public noMarcado : string;
    public total : string;
    public open :boolean;
    public valido : string;

    constructor () {
        this.open = false;
    }
}
