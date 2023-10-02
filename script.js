  // Criar um objeto URLSearchParams a partir da URL para procurar
  var params = new URLSearchParams(window.location.search);
  
  // Informações fixas
  const header = '<header id="container-menu"><ul><li><a href="" class="logo"></a></li><li class="header-menu"><a href="">Quem somos</a><div class="border-left"></div></li><li class="header-menu"><a href="">Unidades</a><div class="border-left"></div></li><li class="header-menu"><a href="menu.html">Cardápios</a><div class="border-left"></div></li><a href="index.html" class="header-home"></a></ul></header>'
  const confirmar_pedido = '<br/><a class="btn button_select" id="return_to_home_from_response" href="index.html">Confirmar pedido</a>';
  const valor_nulo = '<main><br><h3 class="response_items"> Por gentileza, retorne ao cardápio e escolha: <br><br> 1 Entrada <br> 1 Prato Principal <br> e 1 Sobremesa. </h3>';

  // Coletando os parâmetros passados através do formulário
  var form_entrada = params.get("entrada");
  var form_prato_principal = params.get("prato_principal");
  var form_sobremesa = params.get("sobremesa");

  // Coletando os parâmetros passados através do formulário
  var html_entrada = '<main><br><h3 class="response_items">Confira o pedido</h3><div class="border-menu-top"></div><br><h3 class="response_items">Entrada</h3> <br><img src="assets/img/appetizers/' + form_entrada + '.png" class="response_menu_item"/><br></br>';
  var html_prato_principal = '<br><h3 class="response_items">Prato Principal</h3> <br><img src="assets/img/main_courses/' + form_prato_principal + '.png" class="response_menu_item"/><br>';
  var html_sobremesa = '<br><h3 class="response_items">Sobremesa</h3><br><br> <br><img src="assets/img/desserts/' + form_sobremesa + '.png" class="response_menu_item"/><br><br><br>';
  
  //Header
  document.write(header);
        
  // Checando se há valor nulo
  if(entrada != null & prato_principal != null & sobremesa != null) {
  // Retornando escolhas caso não exista valor nulo
  document.write(html_entrada);
  document.write(html_prato_principal);
  document.write(html_sobremesa);
  document.write(confirmar_pedido);
  } else {
    // Retornando texto padrão se existir algum valor nulo
      document.write(valor_nulo);
  }
