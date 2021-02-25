var push = require('web-push')

let vapidkeys = {
    publicKey: 'BMtTYPaPDB75NML1aSxQvtCrQw3Ep9_YgYDz_K9w60yYybRmqpwtnGGvV3zdlIhmiC6yk8Grqr-geIJLX_r5YAQ',
    privateKey: 'lfOOl0SfA4Xqx5sWwRdxEalUzEHykqYHS3zLqbHoG7Y'
  };

push.setVapidDetails('mailto:ashfaqalizardariofficial@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {};

push.sendNotification(sub, 'Test Message');