# Boas Práticas PO UI Protheus

Diretrizes para garantir performance, manutenibilidade e qualidade nas interfaces.

## Arquitetura
- **Interceptors**: Use interceptors para injetar automaticamente o Token de Autenticação em todas as requisições.
- **Guards**: Proteja as rotas verificando se o usuário está autenticado no ERP.
- **Dumb Components**: Separe a lógica de negócio (Smart Components) da apresentação (Dumb Components).

## Performance
- **Lazy Loading**: Carregue os módulos das rotinas apenas quando acessados.
- **Async Pipe**: Prefira o uso do pipe async para evitar memory leaks com Observables.
- **Paginação no Backend**: Nunca traga todos os registros do Protheus para o frontend; use sempre os parâmetros de página e tamanho de página.

## Internacionalização (i18n)
- Utilize o `PoI18nService` para suportar múltiplos idiomas, facilitando o uso global do Protheus.

## Estilo e UX
- Evite CSS inline; utilize as classes utilitárias do PO UI ou arquivos SCSS/CSS dedicados.
- Mantenha feedbacks claros ao usuário (Loaders, Toasts de erro/sucesso).
