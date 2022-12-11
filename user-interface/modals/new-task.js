const { Modal, Blocks, Elements, Bits } = require('slack-block-builder');

let chains = [{ text: ':ethereum: Eth-Mainnet', value: 'C04DL9FLJCS' }, { text: ':ethereum: Eth-Goerli', value: 'C04D5RANYH5' }]

module.exports = (prefilledTitle, currentUser) => {
  const textInput = (taskTitle) => {
    if (taskTitle) {
      return Elements.TextInput({
        placeholder: 'Do this thing',
        actionId: 'taskTitle',
        initialValue: taskTitle,
      });
    }
    return Elements.TextInput({
      placeholder: 'Do this thing',
      actionId: 'taskTitle',
    });
  };

  return Modal({ title: 'Create new task', submit: 'Create', callbackId: 'new-task-modal' })
    .blocks(
      Blocks.Input({ label: 'New task', blockId: 'taskTitle' }).element(
        textInput(prefilledTitle),
      ),
      Blocks.Input({ label: 'Assign user', blockId: 'taskAssignUser' }).element(
        Elements.UserSelect({
          actionId: 'taskAssignUser',
        }).initialUser(currentUser),
      ),
       Blocks.Input({ label: 'Select Chains for this alert', blockId: 'section678' })
        .element(
          Elements.StaticMultiSelect({ placeholder: 'Select members...' })
            .actionId('text1234')
            .options(
              chains.map((item) => Bits.Option({ text: item.text, value: item.value }))

              //Manually addes multi-select options
              // Bits.Option({ text: ':cheese_wedge: With Cheeze', value: '012' }),
              // Bits.Option({ text: ':fish: With Anchovies', value: '013' }),
              // Bits.Option({ text: ':cookie: With Scooby Snacks', value: '014' }),
              // Bits.Option({ text: ':beer: I Prefer Steak and Beer', value: '015' })
              
              )),
      Blocks.Input({ label: 'Time', blockId: 'taskDueTime', optional: true }).element(
        Elements.TimePicker({
          actionId: 'taskDueTime',
        }),
      ),
    ).buildToJSON();
};
