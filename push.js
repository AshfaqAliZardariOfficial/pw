var push = require('web-push')

let vapidkeys = {
    publicKey: 'BMtTYPaPDB75NML1aSxQvtCrQw3Ep9_YgYDz_K9w60yYybRmqpwtnGGvV3zdlIhmiC6yk8Grqr-geIJLX_r5YAQ',
    privateKey: 'lfOOl0SfA4Xqx5sWwRdxEalUzEHykqYHS3zLqbHoG7Y'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);

// let sub = {};
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eOSZ0qslxNg:APA91bHS2yOMb0Y5vEZxq8mb5Qo3w3FNkvgZeF1RiyjFZCVO_NlDJ57fMkAPfERpOyz8jKW2eKxBIwRxoUZC21MOX5tFBbXyLBCpLJHUCXufiADRWtA0CB5ao8BIQtzMyCV96u9lP2V8","expirationTime":null,"keys":{"p256dh":"BOJwfgxHZJyUQwNwBgtXwdPp-87obxC1b9x02jQYbSliO1rOvNQR8CvP0uA3xUEmmv4M_HTgYPTfub-Kn8mD9TY","auth":"3O0NCVXR_6E9GunuGMF46g"}};

push.sendNotification(sub, 'Test Message');