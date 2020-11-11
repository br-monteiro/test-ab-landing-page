## Test A/B em LP
Estes scripts foram implmentados para facilitar o experimento de tests A/B com os formulários do PP em LPs usando o RDSM. Abaixo é possível ver as etapas de configuração.

### Google Sheets
Os valores capturados serão enviados para uma [Planilha do Google](https://docs.google.com/spreadsheets/d/17bTxc5Ji5oW7enFYGeQfY6biC7QTO1IkT73bBZubOgA/edit?usp=sharing)
> IMPORTANTE: faça uma cópia desta planilha
#### Inserindo Macro
Para realizar a captura dos dados, será usado uma macro que receberá a requisição e fará o tratamento e gerenciamento dos dados.<br>
Com a planilha aberta, clique no menu **Tools > Script editor**. Será aberto uma nova aba com um editor de script da macro. Copie o [código](capture-data.gs) e cole dentro do editor, substituindo todo o existente.<br>

Salve a edição clicando do menu **File > Save**.
> IMPORTANTE: será aberta uma caixa solicitando um nome para o projeto. Escolha um nome e clique em **OK**.

#### Publicando Macro
Para que a macro recebe as requisições, é necessário publicá-la.<br>
Para isso, clique no menu **Publish > Deploy as web app...**.<br>
Após isso, será aberta uma tela. Nela escolha a opção **Anyone, even anonymous** no seletor **Who has access to the app**. Clique em **Deploy** e dê as permissões necessárias para a macro.<br>
**Após executar os passos acima, será gerado uma URL para a execução da macro. COPIE esta URL, pois ela será usada nos próximos passos.**

#### Habilitando Macro
Após a edição e publicação da macro, será necessário vincular a função criada na macro com a planilha. Para isto, clique no menu **Tools > Macros > Import** e escolha a função `doPost`.

### Cenários
O experimento é composto por dois cenários, sendo eles A e B, com as seguintes caracteríticas:
 - A: Cenário com os formulários nativos do RDSM
 - B: Cenário com os formulários do PP

### Configurando cenários
 - Entre na tela de edição da LP e habilite o teste A/B clicando no botão **Criar Teste A/B**
 - Neste repositório é possível encontrar os scripts que devem ser inseridos através da **Edição avançada** para cada cenário

script do [cenário A](scenario-a.html)<br>
script do [cenário B](scenario-b.html)<br>

#### Configurando cenário B
O cenário B é o único que envia dados das etapas do usuário para a [Planilha do Google](https://docs.google.com/spreadsheets/d/17bTxc5Ji5oW7enFYGeQfY6biC7QTO1IkT73bBZubOgA/edit?usp=sharing), porém, é necessário informar qual a URL que receberá as requisições (URL da macro). Para isto, basta colar a URL gerada na publicação da macro na variável `URL_MACRO_SHEETS` dentro do script:

```html
<script>
  console.log('#scenario-B');

  var URL_MACRO_SHEETS = 'https://script.google.com/macros/s/AKfycbx84liLkskdkkwpfD0S85rSrcF5PKP2kS_NODxlp7Sr8T_CEbMU/exec';
  ...
```

### Configurando a TYP
Na edição avançada da TYP, use o script [thankyou-page.html](thankyou-page.html)

## LAUS DEO ∴