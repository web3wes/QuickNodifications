const { modals } = require('../../user-interface');


const newTaskModalCallback = async ({ ack, view, body, client }) => {
  const providedValues = view.state.values;

  const taskTitle = providedValues.taskTitle.taskTitle.value;


  const User =
  providedValues.taskAssignUser.taskAssignUser.selected_user;

// I'll rename this but section678 comes for view-fixtures line 60. It is the block id. 
// text1234 is the action Id
console.log(providedValues.section678.text1234.selected_options)

let channels = providedValues.section678.text1234.selected_options


// Post a message to a channel your app is in using ID and message text
async function publishMessage(id, text) {
try {

  channels.forEach(async channel => {
    const result = await client.chat.postMessage({
      // The token you used to initialize your app
      token: "xoxp-209991238290-4225314667782-4494286765763-a526172fb3dce270c3f6fe7b78cdd90f",
      channel: channel.value,

      // Following was the default message template
      // text: "Hi folks, \n \n "+
      
      // `${User}.\n \n`

      // +" Said something went wrong Please feel free to follow in 🧵"
      text: taskTitle+" From Qnodifications"
      // You could also use a blocks[] array to send richer content
    });
    
  });
 

  // Print result, which includes information about the message (like TS)
  console.log(User);
}
catch (error) {
  console.error(error);
}
}



  try {
    await ack({
      response_action: 'update',
      view: modals.taskCreated(taskTitle),
    });

    console.log("User is >> "+ User)
    console.log("Body user is >> "+ body.user.id)
    if (User == body.user.id) {
     publishMessage("C12345", taskTitle);
    }

  
  } catch (error) {
    await ack({
      response_action: 'update',
      view: modals.taskCreationError(taskTitle),
    });
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { newTaskModalCallback };
