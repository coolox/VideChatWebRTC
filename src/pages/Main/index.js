import {useState, useEffect, useRef} from 'react';
import socket from '../../socket/index.js';
import ACTIONS from '../../socket/actions';
import {useNavigate} from 'react-router-dom';
import {v4} from 'uuid';

export default function Main() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const rootNode = useRef();

  console.log('rootNode', rootNode);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
      
      if (rootNode.current) {
        setRooms(rooms);
      }
    });
  }, []);

  return (
    <div ref={rootNode}>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => {
              navigate(`/room/${roomID}`);
            }}>JOIN ROOM</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {
        navigate(`/room/${v4()}`);
      }}>Create New Room</button>
    </div>
  );
}