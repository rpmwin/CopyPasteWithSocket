import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { v4 as uuidv4 } from "uuid";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
const port = process.env.PORT || 8000;



let connections = {};

io.on("connection", (socket) => {
  // console.log("a user connected");

  console.log("New connection:", socket.id);

  socket.on("generateCode", () => {
    const code = uuidv4().substring(0, 6); // Generate a short unique code
    connections[code] = { userA: socket.id, userB: "" };
    socket.emit("codeGenerated", code);
  });

  socket.on("connectWithCode", (data) => {
    const { connectionCode } = data;

    const code = connectionCode;

    if (connections[code] && !connections[code].userB) {
      console.log(connections[code].userA, socket.id);
      let user_a = connections[code].userA;
      io.to(user_a).emit("RequestingToConnect", { user: socket.id, code });
    } else {
      socket.emit("error", "Invalid or already used code");
    }
  });

  socket.on("acceptConnection", (data) => {
    const { connectionCode, user_b } = data;

    console.log(connectionCode, user_b);

    const code = connectionCode;
    connections[code].userB = user_b;

    const user_a = socket.id;

    if (!connections[code].userB) {
      socket.emit("error", "Invalid or already used code");
      return;
    }

    const roomId = `room_${user_a}_${user_b}`;

    io.sockets.sockets.get(user_a)?.join(roomId);
    io.sockets.sockets.get(user_b)?.join(roomId);

    io.to(user_a).emit("ConnectionAccepted", {
      my_id: user_a,
      other_id: user_b,
      room_id: roomId,
    });
    io.to(user_b).emit("ConnectionAccepted", {
      my_id: user_b,
      other_id: user_a,
      room_id: roomId,
    });
  });

  socket.on("shareText", (data) => {
    const { text, room } = data;

    io.to(room).emit("textShared", { text });
  });

  socket.on("sharePassword", (data) => {
    const { password, room } = data;

    io.to(room).emit("passwordShared", { password });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    for (const code in connections) {
      if (
        connections[code].userA === socket.id ||
        connections[code].userB === socket.id
      ) {
        delete connections[code];
        break;
      }
    }
  });
});

httpServer.listen(port, () => {
  console.log(`listening on *:${port}`);
});
