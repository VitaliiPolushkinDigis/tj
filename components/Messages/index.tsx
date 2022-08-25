import { FC } from 'react';
import { Message, useJoinRoomMutation, useSubscribeToEventsQuery } from '../../services/api/MessageService';

interface MessagesProps {
  messages: string[];
}

const Messages: FC<MessagesProps> = ({ messages }) => {
  const { data } = useSubscribeToEventsQuery();
  const [joinRoom] = useJoinRoomMutation();

  console.log('data', data);

  const handleJoinRoom = (message: Message) => {
    joinRoom(message.room);
  };

  return (
    <div>
      {data &&
        data?.map((message, i) => (
          <p onClick={() => handleJoinRoom(message)} key={i}>
            {message.text}
          </p>
        ))}
    </div>
  );
};

export default Messages;
