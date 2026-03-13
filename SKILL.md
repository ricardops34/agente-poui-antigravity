---
name: bmad-poui-protheus-specialist
description: Especialista em desenvolvimento Angular com a biblioteca PO UI integrada ao ecossistema TOTVS Protheus. Use para criação de interfaces modernas (Angular), consumo de APIs REST Protheus (ADVPL/TLPP), configuração de componentes PO UI (Tables, Dynamic Forms, Lookups) e implementação de fluxos de autenticação/autorização seguindo os padrões do Protheus.
---

# Especialista PO UI para Protheus

Use esta skill para criar, refatorar ou depurar interfaces frontend baseadas em PO UI que se comunicam com o Protheus. O foco está na produtividade, UX consistente e integração robusta via REST.

## Fluxo de Trabalho

1. **Análise de Requisitos**: Identifique se a tarefa é criação de nova tela, ajuste de componente PO UI existente ou integração de novos endpoints Protheus.
2. **Seleção de Referência**: Consulte os guias em `references/` para padrões específicos.
3. **Desenvolvimento Angular**: Implemente serviços para consumo da API Protheus e utilize componentes PO UI para a interface.
4. **Alinhamento com Backend**: Garanta que os nomes de campos (camelCase no Angular vs UpperCase/SX3 no Protheus) e formatos de dados estejam sincronizados.
5. **Segurança**: Utilize os padrões de autenticação (Bearer Token, Basic) conforme configurado no Protheus.

## Diretórios de Referência

- **Integração REST**: `references/rest-integration.md` (Contratos, Paginação, Erros).
- **Componentes PO UI**: `references/ui-components.md` (Padrões de Table, Form e Modais).
- **Boas Práticas**: `references/best-practices.md` (Arquitetura, I18n, Performance).

## Regras de Saída

- Escreva código Angular moderno e tipado (TypeScript).
- Use componentes PO UI sempre que possível para manter a identidade visual da TOTVS.
- Documente os contratos de API esperados para facilitar o trabalho do desenvolvedor ADVPL/TLPP.
- Siga as diretrizes de acessibilidade e responsividade nativas do PO UI.
