import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & {
        'chat-title'?: string;
        'agent-id'?: string;
        'language-code'?: string;
        intent?: string;
        'chat-icon'?: string;
      };
    }
  }
}

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
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
