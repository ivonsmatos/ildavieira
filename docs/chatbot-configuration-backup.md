# Documentação do Chatbot

## Introdução

O chatbot foi implementado utilizando o Dialogflow Messenger, uma solução de integração que permite incorporar um assistente virtual diretamente no site. Este documento detalha as configurações realizadas, os ajustes implementados e os passos para manutenção e restauração.

## Configuração Atual

### Código do Chatbot

O código do chatbot foi configurado no arquivo `index.html` com os seguintes elementos:

```html
<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  chat-title="ChatIlda"
  agent-id="96a79b61-798d-4632-a1ce-1c62d81b1553"
  language-code="pt-br"
  intent="WELCOME"
></df-messenger>
```

### Content Security Policy (CSP)

Para garantir o funcionamento do chatbot, ajustamos as regras de CSP no `index.html`:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://www.google.com https://static.cloudflareinsights.com; connect-src 'self' https://dialogflow.cloud.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;"
/>
```

### Estilos Personalizados

Os estilos foram configurados para garantir a visibilidade e posicionamento do chatbot:

```html
<style>
  df-messenger {
    --df-messenger-button-color: #007bff;
    --df-messenger-chat-background-color: #ffffff;
    --df-messenger-font-color: #000000;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
</style>
```

## Ajustes Realizados

1. **Substituição do código do chatbot**: O código foi atualizado para incluir o atributo `intent="WELCOME"`, garantindo que a conversa seja iniciada automaticamente.
2. **Configuração de CSP**: Adicionamos os domínios necessários para permitir o carregamento do script e conexões do Dialogflow.
3. **Estilos customizados**: Ajustamos as variáveis CSS para melhorar a aparência e funcionalidade do chatbot.

## Passos para Manutenção

1. **Verificar o carregamento do script**: Certifique-se de que o script do Dialogflow está sendo carregado corretamente.
2. **Ajustar CSP no servidor**: Caso o chatbot não funcione, revise as regras de CSP para garantir que os domínios necessários estão permitidos.
3. **Testar em diferentes navegadores**: Verifique o funcionamento em navegadores como Google Chrome, Firefox e Microsoft Edge.

## Backup do Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Escola Estadual Ilda Vieira Vilela - Educação de excelência no Grajaú, Cocaia. Cursos técnicos em Desenvolvimento de Sistemas, Vendas, Logística e Farmácia."
    />
    <meta
      name="keywords"
      content="escola, educação, grajaú, cocaia, cursos técnicos, ilda vieira vilela, desenvolvimento sistemas, vendas, logística, farmácia"
    />
    <meta name="author" content="Escola Ilda Vieira Vilela" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph -->
    <meta
      property="og:title"
      content="Escola Ilda Vieira Vilela - Educação que Transforma"
    />
    <meta
      property="og:description"
      content="Educação de excelência no Grajaú, Cocaia. Cursos técnicos com alta empregabilidade."
    />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />

    <title>Escola Ilda Vieira Vilela - Educação que Transforma</title>

    <link
      rel="icon"
      href="https://res.cloudinary.com/dywhdgppg/image/upload/v1763245600/logo-ilda-vieira-vilela_jjk4zv.png"
      type="image/png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://res.cloudinary.com/dywhdgppg/image/upload/v1763245600/logo-ilda-vieira-vilela_jjk4zv.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <style>
      df-messenger {
        --df-messenger-button-color: #007bff;
        --df-messenger-chat-background-color: #ffffff;
        --df-messenger-font-color: #000000;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
    </style>
    <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
  </head>
  <body>
    <div id="root">
      <header class="pre-app-header">
        <img
          src="https://res.cloudinary.com/dywhdgppg/image/upload/v1763245600/logo-ilda-vieira-vilela_jjk4zv.png"
          alt="Logo Ilda Vieira Vilela"
          class="pre-app-logo"
        />
      </header>
      <df-messenger
        chat-title="ChatIlda"
        agent-id="96a79b61-798d-4632-a1ce-1c62d81b1553"
        language-code="pt-br"
        intent="WELCOME"
      ></df-messenger>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Documentação do Dialogflow Messenger

Para mais informações sobre a integração do Dialogflow Messenger, consulte a [documentação oficial](https://docs.cloud.google.com/dialogflow/es/docs/integrations/dialogflow-messenger?hl=pt-br).
