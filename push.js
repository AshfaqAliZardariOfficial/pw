var push = require('web-push')

let vapidkeys = {
    publicKey: 'BMtTYPaPDB75NML1aSxQvtCrQw3Ep9_YgYDz_K9w60yYybRmqpwtnGGvV3zdlIhmiC6yk8Grqr-geIJLX_r5YAQ',
    privateKey: 'lfOOl0SfA4Xqx5sWwRdxEalUzEHykqYHS3zLqbHoG7Y'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidkeys.publicKey, vapidkeys.privateKey);

// let sub = {};

async function subscribe(){
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BMtTYPaPDB75NML1aSxQvtCrQw3Ep9_YgYDz_K9w60yYybRmqpwtnGGvV3zdlIhmiC6yk8Grqr-geIJLX_r5YAQ'
    });

    console.log(JSON.stringify(push));
    var sub = JSON.stringify(push);
    push.sendNotification(sub, 'Test Message');
}

