import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"]')) {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <df-messenger
      chat-title="ChatIlda"
      agent-id="96a79b61-798d-4632-a1ce-1c62d81b1553"
      language-code="pt-br"
    ></df-messenger>
  );
};

export default ChatbotWidget;
