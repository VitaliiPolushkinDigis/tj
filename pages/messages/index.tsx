import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import Messages from '../../components/Messages';
import MessageInput from '../../components/Messages/MessageInput';
import { MainLayout } from '../../layouts/MainLayout';

export default function MessagesPage(props) {
  console.log('prps', props);

  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Messages</Typography>
        <Divider className="mt-20 mb-30" />
        <MessageInput send={props.send} />
        <Messages messages={props.messages} />
      </Paper>
    </MainLayout>
  );
}
