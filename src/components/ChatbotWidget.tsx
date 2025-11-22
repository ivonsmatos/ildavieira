import React from 'react';

const ChatbotWidget: React.FC = () => {
  return (
    <iframe 
      width="350" 
      height="430" 
      allow="microphone;" 
      src="https://console.dialogflow.com/api-client/demo/embedded/96a79b61-798d-4632-a1ce-1c62d81b1553">
    </iframe>
  );
};

export default ChatbotWidget;
