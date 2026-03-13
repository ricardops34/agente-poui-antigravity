# Agente PO UI Antigravity para Protheus

Este repositório contém uma skill especializada para o **Antigravity**, focada no desenvolvimento de interfaces Angular utilizando a biblioteca **PO UI** integrada ao ecossistema **TOTVS Protheus**.

## 🚀 Como Usar

Para utilizar este agente em seu projeto Antigravity:

1. Clone este repositório dentro da pasta de skills do seu projeto:
   ```bash
   git clone https://github.com/ricardops34/agente-poui-antigravity.git .agent/skills/bmad-poui-protheus-specialist
   ```
2. O Antigravity reconhecerá automaticamente a nova skill através do arquivo `SKILL.md`.
3. Você pode interagir com o agente pedindo tarefas como:
   - *"Crie uma tela de listagem PO UI para a tabela de Clientes (SA1) do Protheus."*
   - *"Configure um serviço Angular para consumir o endpoint REST /api/v1/pedidos."*
   - *"Refatore este formulário para usar o PoDynamicForm."*

## 📦 Dependências

O código gerado por este agente assume que o seu projeto possui as seguintes dependências instaladas:

- **Angular**: v15 ou superior.
- **PO UI**: `@po-ui/ng-components` v15 ou superior.
- **Protheus**: AppServer com suporte a REST (ADVPL/TLPP).
- **Protheus-Lib**: `@totvs/protheus-lib-core` (opcional, para integrações nativas).

## 💡 Exemplos de Integração

### 1. Serviço de Dados (Service)
O agente gera serviços seguindo este padrão para garantir compatibilidade com a paginação do PO UI:

```typescript
// cliente.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableFilteredItems } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly endpoint = '/api/v1/clientes';

  constructor(private http: HttpClient) {}

  getSortedItems(params: any): Observable<PoTableFilteredItems> {
    return this.http.get<PoTableFilteredItems>(this.endpoint, { params });
  }
}
```

### 2. Componente de Tabela (Template)
Exemplo de como o agente estrutura uma tabela padrão:

```html
<po-page-list
  p-title="Clientes Protheus"
  [p-actions]="actions"
  [p-filter]="filter">

  <po-table
    [p-items]="items"
    [p-columns]="columns"
    [p-loading]="isLoading"
    (p-show-more)="showMore()">
  </po-table>

</po-page-list>
```

## 🛠️ Estrutura do Repositório

- `SKILL.md`: Instruções de sistema para o Antigravity.
- `references/`: Documentação técnica detalhada dividida por tópicos.
  - `rest-integration.md`: Padrões de API REST.
  - `ui-components.md`: Guia de componentes visuais.
  - `best-practices.md`: Boas práticas de arquitetura.

---
Desenvolvido para acelerar a modernização de interfaces no ecossistema TOTVS Protheus.
