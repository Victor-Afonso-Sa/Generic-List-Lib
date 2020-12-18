# Generic-List-Lib
Biblioteca para criação de CRUD automatico usando angular. (Desenvolvido por Victor Afonso)
## [GitHub](https://github.com/RepositorioGenericofrwk/Generic-List-Lib)

## [NPM](https://www.npmjs.com/package/generic-list)
*******
Sumario:
 1. [Iniciando](#inicio)
 2. [Configurando](#config)
 3. [CSS customizado](#css)
 4. [Extras](#extras)

*******

**A partir de um Array de JSON.**


<div id='inicio'/>


## Iniciando:
### Importando via NPM:

> ## `npm i generic-list` 
> - https://www.npmjs.com/package/generic-list/

## Necessário instalar o bootstrap e NGX bootstrap para estilização basica e o jsPDF + o jsPDF-autotable:
> ## `npm i bootstrap`
> - https://www.npmjs.com/package/bootstrap
> ## `npm i ngx-bootstrap`
> - https://www.npmjs.com/package/ngx-bootstrap
> ## `npm install jspdf jspdf-autotable --save`
> - https://www.npmjs.com/package/jspdf-autotable
> - https://www.npmjs.com/package/jspdf
## Importar o CSS:
##  `@import '~bootstrap/dist/css/bootstrap.min.css';` ( Importando direto no src/style.css ou src/style.scss )
> - ##### https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
## **E por ultimo puxar a modal do NGX bootstrap e o generic-list no modulo raiz do seu projeto**
>![image](https://user-images.githubusercontent.com/71721377/95255017-2ab8c200-07f7-11eb-8b2f-025337968ce5.png)

> - `import { GenericListModule } from 'generic-list';` 
> -  `import { ModalModule } from 'ngx-bootstrap/modal';`
> - ` imports: [`
> -   `GenericListModule,`
> -   `ModalModule.forRoot()],`


### Passando o Objeto para criação da Listagem:
### No HTML:
> ![image](https://user-images.githubusercontent.com/71721377/95365557-b3dc0180-08a8-11eb-806b-1b1724b241ac.png)
> `<div *ngIf="registros" >
> <generic-list [(registros)]="registros"> </generic-list>`
> </div>
### No Componente:
> ![image](https://user-images.githubusercontent.com/71721377/95107713-aab82c80-0710-11eb-98c0-d77686def608.png)
##### Passando o objeto desejado não importa tamanho numero de componentes so precisa ser um array de JSON

### Na tela:
> ![image](https://user-images.githubusercontent.com/71721377/95107989-05ea1f00-0711-11eb-9ff6-96372c759dc9.png)

## Executando tarefas CRUD:
### No HTML basta passar nesses eventos sua logica de acordo com cada funcionalidade CRUD
> ![image](https://user-images.githubusercontent.com/71721377/95365865-0c130380-08a9-11eb-9698-580856f762a5.png)
- ` (inserir)="console($event[0])"`
- ` (editar)="console($event[0])"`
- ` (excluir)="console($event[0])"`
### No componente apenas para didatica um log no Objeto:
> ![image](https://user-images.githubusercontent.com/71721377/95109176-9d9c3d00-0712-11eb-8cff-684e69d42d32.png)

## Executando:
#### Adicionando:
> ![image](https://user-images.githubusercontent.com/71721377/95109573-24e9b080-0713-11eb-8f65-4882be32038c.png)
#### No console:
> ![image](https://user-images.githubusercontent.com/71721377/95109752-68dcb580-0713-11eb-8035-28e96f5ff4d9.png)
#### Editando:
> ![image](https://user-images.githubusercontent.com/71721377/95109957-b0fbd800-0713-11eb-86f4-db06f53efc9c.png)
#### No console:
> ![image](https://user-images.githubusercontent.com/71721377/95110018-c96bf280-0713-11eb-8022-8208003399d8.png)
#### Excluindo:
> ![image](https://user-images.githubusercontent.com/71721377/95110168-01733580-0714-11eb-9301-b44fa064b2ea.png)
#### No console:
> ![image](https://user-images.githubusercontent.com/71721377/95110233-18b22300-0714-11eb-9e02-1a02ae679cae.png)

## Resultado na view:
### Antes:
> ![image](https://user-images.githubusercontent.com/71721377/95110369-47c89480-0714-11eb-8afe-07bdabdb4486.png)
### Depois:
> ![image](https://user-images.githubusercontent.com/71721377/95110471-70e92500-0714-11eb-8a72-8282fdb98874.png)



<div id='config'/>



## Configuração Formulario e tabela:
> ![image](https://user-images.githubusercontent.com/71721377/95366085-54322600-08a9-11eb-9f27-ead38c28929b.png)
> - `[config]="config"`
#### Objeto de configuração:
> ![image](https://user-images.githubusercontent.com/71721377/95119604-95e49480-0722-11eb-9a4e-18c9e3adb8ad.png)
>
> `config = {
  cabecalho: {
    id: 'Identificação',
    name: 'nome'
  },
  obrigatorio: ['id', 'nome'],
  readOnly: ['id'],
  tipos: {
    id: 'number',
    sigla: 'text',
    nome: 'text',
    data: 'date'
  }`
#### Cabeçalho:
> ![image](https://user-images.githubusercontent.com/71721377/95113771-54032080-0719-11eb-84a5-f65d29cfbbf9.png)
### Obrigatorio:
> Campos que devem ser Obrigatorios (required HTML5)
### readOnly:
> Campos que devem ser apenas para leitura (readonly HTML5)
#### Tipos inputs Formulario:
> ![image](https://user-images.githubusercontent.com/71721377/95114618-9bd67780-071a-11eb-97ea-f0094b315075.png)
### Exemplo:
> ![image](https://user-images.githubusercontent.com/71721377/95115066-4484d700-071b-11eb-97e4-be6121b6cff3.png)
#### Configuração extra campos a ser exibidos / disponivel a edição e  disponivel a criação:
- dentro do objeto config:
>  ![image](https://user-images.githubusercontent.com/71721377/96643506-0a602b80-12fe-11eb-80b0-9eec842ea77c.png)
>
> - `exibirCampos: ['id','name','price'],`
> - `editarCampos:['name','price'],`
> - `criarCampos:['price']`
### JSON:
 ````
[
  {
     "id":1,
     "name":"Jaleco",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 999,99",
     "available":true,
     "data": '2000-12-30'
  },
  {
     "id":2,
     "name":"Avental",
     "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
     "price":"R$ 999,99",
     "available":true
  }]
  ````
 ### Em exibição antes da configuração:
 > ![image](https://user-images.githubusercontent.com/71721377/96644149-08e33300-12ff-11eb-96d3-addaca1d5497.png)
 ### Em exibição após configuração:
 > ![image](https://user-images.githubusercontent.com/71721377/96644236-22847a80-12ff-11eb-80da-bd1fc3a9ec24.png)
 ### Formulario de edição:
 > ![image](https://user-images.githubusercontent.com/71721377/96644289-34feb400-12ff-11eb-9ad0-99e7ab3b3cd2.png)
 ### Formulario de criação:
 > ![image](https://user-images.githubusercontent.com/71721377/96644396-62e3f880-12ff-11eb-841d-bbe7d05d4ae3.png)

<div id='css'/>


## CSS personalizado:
> ![image](https://user-images.githubusercontent.com/71721377/95366363-bc810780-08a9-11eb-88d6-e3e2866c158b.png)

##### classeTable: CSS da tabela.

##### classeForm: CSS do Formulario de Adição e Edição.

##### classeConfirmModal: CSS modal de confirmação de exclusão (objeto).
> ![image](https://user-images.githubusercontent.com/71721377/95119043-b6601f00-0721-11eb-931a-e74c1536f7b0.png)
- classe : Classe CSS.
- menssagem: Mensagem na modal.
- icon : Icone no botão de confirmação (https://material.io/resources/icons/).
- title: Titulo da Modal.
- textConfirm: Texto no botão de confirmação.
- textCancel: Texto no botão de Cancelar.
###### Exemplo;
> ![image](https://user-images.githubusercontent.com/71721377/95119886-11464600-0723-11eb-9629-4452b490f1bd.png)


<div id='extras'/>


## Extras:
- Desabilitando caixa de pesquisa:
> Na tag HTML: `[searchBox]="false"`
- Passando parametro de pattern de DATA:
> - **EXEMPLO:** `[datePatern]="'dd/MM/yy'"` (PIPE DATE angular) (Apenas quando config do tipo for date)
- Desativando botão de exportar:
> Na tag HTML: `[export]="false"`
- Alterando nome do arquivo exportado:
> Na tag HTML: `[filename]="'nomeDoArquivo'"`
- Alterando cor das letras da tabela: `[color]="'#80ff80'"`

