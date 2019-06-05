const createTestCafe = require("testcafe");

const TEST = {
    init: function(){
        this.setParameter();
        this.test(1338, 1349);
    },
    setParameter : function (){
        this.runner = null;
        this.testcafe = null;
    },
    test : function(port1, port2) {
        const setting = {
            skipJsErrors: true,
            skipUncaughtErrors : true,
            quarantineMode: true,
            selectorTimeout: 10000,
            assertionTimeout: 10000,
            pageLoadTimeout: 100000,
            speed: 1,
            stopOnFirstFail: true,
        };
        createTestCafe("localhost", port1, port2).then(tc => {
            this.testcafe = tc;
            this.runner = this.testcafe.createRunner();
            return this.runner.src("sampleTest.js")
                .browsers("chrome")
                .reporter("json", "check.log")
                .run(setting);
        }).then(() => {
            this.testcafe.close();
        });
    }
};

TEST.init();