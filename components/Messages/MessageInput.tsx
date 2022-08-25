import { FC, useState } from 'react';
import { useJoinRoomMutation, useSendMessageMutation } from '../../services/api/MessageService';

interface MessageInputProps {
  send: (text: string) => void;
}

const MessageInput: FC<MessageInputProps> = ({ send }) => {
  const [value, setValue] = useState('');
  const [sendMessage, dat] = useSendMessageMutation();
  const [joinRoom] = useJoinRoomMutation();
  const handleSendClick = () => {
    console.log('data', dat);
    sendMessage(value);
    /*     send(value); */
    setValue('');
  };
  const handleRoomClick = () => {
    console.log('data', dat);
    joinRoom(value);

    setValue('');
  };
  return (
    <div>
      <input
        onChange={(text) => {
          setValue(text.target.value);
        }}
        type="text"
        placeholder="Type your message"
        value={value}
      />
      <button onClick={handleSendClick}>Send</button>
      <button onClick={handleRoomClick}>Create Room</button>
    </div>
  );
};

export default MessageInput;
