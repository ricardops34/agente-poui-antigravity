# Componentes PO UI para Protheus

Guia de utilização dos principais componentes para manter a UX consistente com o ecossistema Totvs.

## PO Table
Componente essencial para listagens.
- Utilize `po-table-column` para definir as colunas baseadas no dicionário de dados (SX3).
- Implemente busca rápida (Quick Search).
- Use `po-table-action` para operações de Alterar, Excluir e Visualizar.

## PO Dynamic Form
Ideal para telas de cadastro baseadas em metadados.
- Facilita a sincronização com o Protheus quando o backend retorna a definição dos campos.
- Utilize para prototipagem rápida de CRUDS simples.

## PO Lookup / PO Combo
Para campos que requerem seleção de dados de outras tabelas (ex: Filial, Grupo de Produtos).
- Certifique-se de que o backend fornece um endpoint de busca com filtro parcial.

## Layouts Protheus
- Utilize `po-page-default` ou `po-page-list` para manter o cabeçalho padrão.
- Siga o esquema de cores oficial (Totvs/PO UI Branding).
