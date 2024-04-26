"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const messageContainerRef = useRef(null);
  const loadBotpressScript = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = initializeBotpressWebChat;
    document.body.appendChild(script);
    setTimeout(() => window.botpressWebChat.sendEvent({ type: 'show' }), 500);
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const initializeBotpressWebChat = () => {
    window.botpressWebChat.init({
      "composerPlaceholder": "Write here",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "9628839a-2ffa-47af-9cb1-635e1cd0f92a",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "9628839a-2ffa-47af-9cb1-635e1cd0f92a",
      "webhookId": "a05d6ddc-eedb-423e-9eb8-9530305d9d6a",
      "lazySocket": true,
      "themeName": "prism",
      "stylesheet": "https://utopia.express/botpress_fullwidth.css",
      "frontendVersion": "v1",
      "theme": "prism",
      "themeColor": "#2563eb"
    });

    window.botpressWebChat.onEvent(
      function (event) {
        console.log(event);
        if (event.type === 'TRIGGER' && event.value && event.value.city) {
          renderMessages(event.value.city);
        }
      },
      ['TRIGGER']
    );
  };

  const handleButtonClick = () => {
    const inputText = document.getElementById('inputField').value;
    setMessages(prevMessages => [...prevMessages, { text: inputText, fromBot: false }]);
    document.getElementById('inputField').value = '';
    window.botpressWebChat.sendEvent({ type: "show" })
    window.botpressWebChat.sendEvent({ type: 'trigger' })
    window.botpressWebChat.sendPayload({ type: 'text', text: inputText });
  };

  const renderMessages = (message) => {
    let index = 0;
    let streamedMessage = '';

    setMessages(prevMessages => {
      if (!prevMessages.length || prevMessages[prevMessages.length - 1].text !== '') {
        return [...prevMessages, { text: '', fromBot: true }];
      }
      return prevMessages;
    });

    const interval = setInterval(() => {
      streamedMessage += message[index];

      setMessages(prevMessages => {
        let newMessages = [...prevMessages];
        newMessages[newMessages.length - 1] = { text: streamedMessage, fromBot: true };
        return newMessages;
      });

      index++;
      if (index === message.length) clearInterval(interval);
    }, 1);
  };

  return (
    <div className="bg-gray-400 h-screen text-white flex justify-center items-center">
      {!showChat ? (
        <button
          className="bg-black text-white p-4 rounded"
          onClick={() => {
            loadBotpressScript();
            setShowChat(true);
          }}
        >
          Open Chat
        </button>
      ) : (
        <div className="bg-orange-300 flex flex-col h-[98%] w-[98%] sm:h-[600px] sm:w-[800px]">
          <div className="flex items-center bg-blue-400 basis-1/12 flex-shrink-0">
            <h1 className="pl-2 text-left basis-1/4">LOGO</h1>
            <h1 className="text-center basis-2/4">CUSTOM UI</h1>
            <h1 className="pr-2 text-right basis-1/4">X</h1>
          </div>
          <div
            id="messageContainer"
            ref={messageContainerRef}
            className={`bg-white grow border-4 border-red-500 text-black`}
            style={{ textAlign: 'left', overflow: 'auto' }}
          >
            {messages.map((message, index) => (
              <div key={index} className={`${message.fromBot ? 'p-1 px-2 bg-purple-500 text-white mr-12 ml-2 my-1 rounded-md ml-12 w-fit' : 'p-1 px-2 bg-blue-500 text-white ml-12 mr-2 my-1 rounded-md ml-auto w-fit'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <input
            id="inputField"
            type="text"
            className="bg-white border-4 border-green-500 basis-2/12 flex-shrink-0 text-black"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const inputText = document.getElementById('inputField').value;
                setMessages(prevMessages => [...prevMessages, { text: inputText, fromBot: false }]);
                document.getElementById('inputField').value = '';
                window.botpressWebChat.sendEvent({ type: "show" });
                window.botpressWebChat.sendEvent({ type: 'trigger' });
                window.botpressWebChat.sendPayload({ type: 'text', text: inputText });
              }
            }}
          />

          <div className="flex items-center bg-blue-400 basis-1/12 flex-shrink-0">
            <h1 className="m-4 p-2 bg-black text-center basis-1/2 rounded-md">PLAY</h1>
            <button
              id="sayButton"
              className="m-4 p-2 bg-black text-center basis-1/2 rounded-md"
              onClick={handleButtonClick}
            >
              SEND
            </button>
          </div>
        </div>
      )}
      <style>
        {`
          .bp-widget-web {
            z-index: -100!important;
            visibility: hidden;
          }
        `}
      </style>
    </div>
  );
}