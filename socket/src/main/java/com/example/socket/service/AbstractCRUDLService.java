package com.example.socket.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractCRUDLService{

    // region Member
    private static final Logger LOG = LoggerFactory.getLogger(AbstractCRUDLService.class);

    @Autowired
    private WebSocketService webSocketService;

    protected abstract String getEntityTopic();

    public void notifyFrontend() {
        final String entityTopic = getEntityTopic();
        if (entityTopic == null) {
            LOG.error("Failed to get entity topic");
            return;
        }

        webSocketService.sendMessage(entityTopic);
    }
    // endregion
}
