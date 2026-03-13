import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {
  items: Array<any> = [];
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Código', type: 'string', width: '10%' },
    { property: 'nome', label: 'Nome do Cliente', type: 'string' },
    { property: 'loja', label: 'Loja', type: 'string', width: '10%' },
    { property: 'status', label: 'Status', type: 'label', labels: [
      { value: 'A', color: 'color-10', label: 'Ativo' },
      { value: 'I', color: 'color-07', label: 'Inativo' }
    ]}
  ];

  public readonly actions: Array<PoTableAction> = [
    { action: this.edit.bind(this), icon: 'po-icon-edit', label: 'Editar' },
    { action: this.delete.bind(this), icon: 'po-icon-delete', label: 'Excluir', type: 'danger' }
  ];

  constructor(private service: ClienteService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.service.getSortedItems({}).subscribe({
      next: (data) => {
        this.items = data.items;
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  edit(item: any) { /* Lógica de edição */ }
  delete(item: any) { /* Lógica de exclusão */ }
}
