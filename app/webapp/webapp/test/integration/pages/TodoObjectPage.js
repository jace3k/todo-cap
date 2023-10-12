sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'webapp',
            componentId: 'TodoObjectPage',
            entitySet: 'Todo'
        },
        CustomPageDefinitions
    );
});