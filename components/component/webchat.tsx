import React, { useEffect } from 'react';

export function Webchat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
                botId: 'd281b55a-91c0-42e3-b355-60b4428406ad',
                clientId: 'd281b55a-91c0-42e3-b355-60b4428406ad',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
                messagingUrl: 'https://messaging.botpress.cloud',
                botName: 'Lucy',
                hideWidget:false,
                disableAnimations:false,
                stylesheet: '',
      });
                window.botpressWebChat.onEvent(() => {
                window.botpressWebChat.sendEvent({ type: 'show' });
            }, ['LIFECYCLE.LOADED']);
    }
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


}

