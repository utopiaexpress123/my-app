"use client"
import React, { useEffect } from 'react';

function TestBot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
                botId: '190d5930-3783-4243-a195-75296dc90b86',
                clientId: '190d5930-3783-4243-a195-75296dc90b86',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                botName: 'Lucy',
                hideWidget: true,
                disableAnimations:false,
                stylesheet: 'https://bot.css',
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

  return (
    <div>
            <div id="bp-web-widget-container" />
    </div>
  );
}

export default TestBot;