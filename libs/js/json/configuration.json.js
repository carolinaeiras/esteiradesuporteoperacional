Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Gerenciamento de Serviço","publishDate":"04/10/2022 14:34:32","pages":[{"id":"bad0c066-ba0f-4320-b274-68154299fff0","name":"Diagrama 1","version":"1.0","author":"carolina.moreira","image":"files\\diagrams\\Diagrama 1.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"21e858af-363b-4eab-b5dc-bf87a6be6d21","name":"Gerenciamento  - Requisição de Serviço e/ou Débito Técnico","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":2258.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"0fb5e4f4-ecd5-42cc-ae0d-4c4b032a5b9b","name":"Fila de atendimento","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":686.0,"y":1528.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"afc54e92-586b-4bb7-94e1-3f5248f0efbc","name":"Encerra chamado no JSM","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1694.0,"y":1779.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"c6f2c700-c19c-49ed-975e-d12c7b4904cc","name":"Recebe a notificação da resolução via e-mail e JSM","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":1102.0,"y":1001.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"fe0531b8-f227-4d56-b6c6-bb4555069fca","name":"Envia mensagem via Whatsapp contendo a resolução","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1102.0,"y":827.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"3d139f70-4cda-4262-9b6e-31b9c38399be","name":"Recebe a notificação da resolução via e-mail e JSM","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":1102.0,"y":605.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"47a96dbb-20d2-4be3-9db7-0ef1c8742e00","name":"Envia mensagem no canal com a resolução","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1102.0,"y":446.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"f8f6cfeb-7ce7-4cbf-8914-7343d0f8ea0f","name":"Recebe a notificação da resolução via e-mail e JSM","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":1102.0,"y":1268.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]}]}],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"bad0c066-ba0f-4320-b274-68154299fff0","containerName":"Diagrama 1","isSubprocess":false,"elements":[{"id":"21e858af-363b-4eab-b5dc-bf87a6be6d21","value":"Gerenciamento  - Requisição de Serviço e/ou Débito Técnico"},{"id":"434d772f-51bd-4392-8214-0447e2d0fbe1","value":"Seller"},{"id":"2d2ab0db-f016-4ff7-a8db-76ba89ec6180","value":"CSA"},{"id":"b13ef062-a21e-460e-9c18-abbc5d8ef7c6","value":"Buyer"},{"id":"95fa1e02-9bda-4e9f-ab4a-1919bbc0dc3b","value":"BX"},{"id":"c0363740-55e4-4744-9e20-1915dcacc239","value":"Lead"},{"id":"90440d94-f054-4585-b79c-30a0d18aa0aa","value":"Aquisição (SR)"},{"id":"23eba12a-35e2-49b0-b6e4-7f456998f365","value":"Parceiro (Integrador)"},{"id":"681f3aa1-2848-4863-b965-896e17d47e2f","value":"TCS"},{"id":"9df64495-b415-474d-912a-e8c43d56aaf3","value":"Squad Tech / Canal Parceiro"},{"id":"23c48816-4a62-4ac5-b0a9-bdc9505ac973","value":"Registra a solicitação/problema na plataforma"},{"id":"5ed6831d-50b1-43f1-9c4b-044bf8ca0f1c","value":"Recebe chamado via Zendesk"},{"id":"62799a5e-8c9c-445e-8062-96104e4128c7","value":"Realiza primeira análise e o atendimento"},{"id":"b09c6d9c-fecc-487e-a59f-fcc6fc76f652","value":"Chamado resolvido?"},{"id":"86c78644-520b-4a8e-b311-cd05ae30f21b","value":"Chamado finalizado"},{"id":"4cdf06d3-1de1-4236-b18c-1759812c9b41","value":""},{"id":"94b9b76d-8f7f-4abc-b6a1-34aedd6d8280","value":"Abertura do chamado via JSM"},{"id":"26efd8ca-aa41-4785-bd01-4042b26c92c6","value":"Associar ticket Zendesk ao JSM"},{"id":"93fbccc2-c897-498e-9137-31d990380b96","value":""},{"id":"8565e99b-cabb-4ddb-9c84-49c54451b009","value":" Registra a solicitação/problema via Marketplace"},{"id":"638f6d44-7e1f-4e9e-b22c-6080e0d516c9","value":""},{"id":"ed163186-ec79-4f26-8e76-c60c6528876a","value":"Acompanha os Marketplace e recebe chamado"},{"id":"c2cf7c3f-f193-44dd-9e7d-cb15a22df0b2","value":"Realiza primeira análise e o atendimento"},{"id":"ba21c11b-09cf-413d-99aa-532ba99f4b18","value":"Chamado resolvido?"},{"id":"d3f78cf2-685a-4089-a239-75ca62a76cca","value":"Chamado finalizado"},{"id":"aa10641c-41b0-4621-80db-d0de53b63c43","value":"Abertura do chamado via JSM"},{"id":"44cc0078-ec0a-4642-ad70-484865232b07"},{"id":"c1dfce32-d555-4444-8f6d-531b1b546473"},{"id":"075a364e-6a0f-495e-b366-49e4b29fcc66","value":"Registra problema via whatsapp"},{"id":"84c42c65-819b-4464-9321-1218fa74e9ac","value":"Realiza primeira análise e o atendimento"},{"id":"acab9ca2-ef8c-4cfc-bf0d-0ce5a8ec71fe","value":"Problema resolvido?"},{"id":"392c6f31-ebb9-4af1-8b6d-adaf39066f9a","value":"Recebe mensagem com a solução"},{"id":"d0a8b79e-23c8-40ac-aec4-e8eb500395c4"},{"id":"871d7691-f632-4b0e-bffa-ef00a8236d85","value":"Abertura do chamado via JSM"},{"id":"6f31f1b5-768e-4f11-ae66-4d19684c712a"},{"id":"c6f489b9-b325-4688-8907-eb49b4c9f420","value":"Consulta portal e documentação pública"},{"id":"8244d034-433c-4f17-90ca-5625ce56c345","value":"Precisa de chamado?"},{"id":"73ea3e8c-2484-4872-8e02-5a5cc7d1bea0"},{"id":"e099337e-5d2c-4f03-b62e-d272a46a4d9c","value":"Abertura do chamado via JSM"},{"id":"ca01c046-4172-425d-b040-2ec6e46e39e3"},{"id":"0fb5e4f4-ecd5-42cc-ae0d-4c4b032a5b9b","value":"Fila de atendimento"},{"id":"31e29485-ac62-484e-a70b-2303d5506ac3","value":"Realiza primeira\nanálise"},{"id":"a4d5add4-09d4-46fb-942f-513f12396365","value":"Chamado corresponde solicitação?"},{"id":"d2613fac-30c8-4f33-a042-5a3129a8a892","value":""},{"id":"2e35f9cc-40ce-4b2a-8dd0-e33a9baab266","value":"Informações completas?"},{"id":"6d9acec0-ad0b-4f8d-84a0-1e63069583e5","value":"Aguardando\nSolicitante"},{"id":"51b37665-ac80-4170-bc90-daeae7d65220","value":"Inicia o atendimento técnico"},{"id":"33a4f775-9ed1-4532-b6ee-8dfd1e29ba0e","value":"Acionar Squad?"},{"id":"c7139925-7288-4e6f-8f52-f9c9f2660eaa","value":"Acionar Canal Parceiro?"},{"id":"667414e8-4bcd-443c-96c7-54c4efce3a7a","value":"Executa atendimento"},{"id":"0b3efc6e-bc88-4105-931b-ab555ff4d8f4","value":"Atualizar Base de conhecimento?"},{"id":"cad80159-1ef2-4234-b451-c77dbbce11b1","value":"Atualizar Confluence"},{"id":"afc54e92-586b-4bb7-94e1-3f5248f0efbc","value":"Encerra chamado no JSM"},{"id":"7f3dc4de-6e80-4194-8ad9-6c2d986ba108","value":"Acionado Squad"},{"id":"af515a03-d44c-4d45-9704-2ed1612a5309","value":"Acionado\nParceiro"},{"id":"c13c57cc-343a-4089-98ab-8e81b30da0f0","value":"Analisar a tarefa/demanda"},{"id":"beea4adf-bc72-4158-bf39-0ead6b40a5c2","value":"Resolvido?"},{"id":"486604e8-fe17-41d1-b98f-2072d927aece","value":"Aguardar resolução"},{"id":"a9c7b5e2-d35f-4617-85ee-b40515a6801f"},{"id":"aa9eedb9-f4b7-48dd-943b-7e651411b6fc"},{"id":"f8f6cfeb-7ce7-4cbf-8914-7343d0f8ea0f","value":"Recebe a notificação da resolução via e-mail e JSM"},{"id":"c6f2c700-c19c-49ed-975e-d12c7b4904cc","value":"Recebe a notificação da resolução via e-mail e JSM"},{"id":"fe0531b8-f227-4d56-b6c6-bb4555069fca","value":"Envia mensagem via Whatsapp contendo a resolução"},{"id":"c6022c00-b848-4d25-bd2d-6eb186a4e34c"},{"id":"3d139f70-4cda-4262-9b6e-31b9c38399be","value":"Recebe a notificação da resolução via e-mail e JSM"},{"id":"47a96dbb-20d2-4be3-9db7-0ef1c8742e00","value":"Envia mensagem no canal com a resolução"},{"id":"256ba95b-0e63-419a-84c4-f27acdfe0d0e"},{"id":"ce45c51f-0b54-4682-b231-efbee88749a1","value":"Chamado finalizado automaticamente no Zendesk"},{"id":"44617d3c-0b28-43c1-ab3c-87401b8f83ca","value":"Chamado finalizado com a orientação"},{"id":"2d7a0808-6ab8-46ec-90af-ffca54112b5d"}]}]}