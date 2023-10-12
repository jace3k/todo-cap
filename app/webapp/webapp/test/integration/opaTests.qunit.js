sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'webapp/test/integration/FirstJourney',
		'webapp/test/integration/pages/TodoList',
		'webapp/test/integration/pages/TodoObjectPage'
    ],
    function(JourneyRunner, opaJourney, TodoList, TodoObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('webapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTodoList: TodoList,
					onTheTodoObjectPage: TodoObjectPage
                }
            },
            opaJourney.run
        );
    }
);