# Integração REST PO UI x Protheus

Esta referência define como estruturar a comunicação entre o frontend Angular (PO UI) e os serviços REST do Protheus.

## Contratos de Dados

### Listagem (Paginação PO UI)
O Protheus deve retornar o payload no formato esperado pelo `PoTable` e componentes de lista:

```json
{
  "items": [],
  "hasNext": true,
  "remainingRecords": 100
}
```

### CRUD (Objeto Único)
Envio e recebimento de objetos para formulários dinâmicos ou específicos:

```json
{
  "codigo": "000001",
  "nome": "NOME DO CLIENTE",
  "status": "A"
}
```

## Tratamento de Erros
Padronize as respostas de erro HTTP (400, 401, 404, 500) com mensagens legíveis:

```json
{
  "code": "400",
  "message": "Campo obrigatório não preenchido: Nome",
  "detailedMessage": "O campo A1_NOME deve conter ao menos 3 caracteres conforme regra de negócio."
}
```

## Serviços Angular (Pattern)
Toda comunicação deve estar em classes `Service`:

```typescript
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly url = '/api/v1/clientes';

  constructor(private http: HttpClient) {}

  getFilteredItems(params: any): Observable<PoTableFilteredItems> {
    return this.http.get<PoTableFilteredItems>(this.url, { params });
  }
}
```
