import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"]')) {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }

    const style = document.createElement('style');
    style.innerHTML = `
      df-messenger {
        --df-messenger-button-color: #007bff;
        --df-messenger-chat-background-color: #ffffff;
        --df-messenger-font-color: #000000;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      df-messenger .chat {
        max-height: 70%;
        max-width: 90%;
        border-radius: 10px;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <df-messenger
      chat-title="ChatIlda"
      agent-id="96a79b61-798d-4632-a1ce-1c62d81b1553"
      language-code="pt-br"
      intent="WELCOME"
    ></df-messenger>
  );
};

export default ChatbotWidget;
