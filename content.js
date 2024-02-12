let mouseDown = false;
let markedMessages = [];

const updateMessages = () => {
  let messages = document.querySelectorAll(
    "yt-live-chat-text-message-renderer"
  );
  document.addEventListener("mousedown", () => (mouseDown = true));
  document.addEventListener("mouseup", () => (mouseDown = false));

  messages.forEach((message) => {
    if (markedMessages.some((id) => id === message.getAttribute("id")))
      markMessage(message);
    message.addEventListener("mouseenter", (event) => {
      if (!mouseDown) return;
      markMessage(event.target);
    });

    message.addEventListener("dblclick", (event) => markMessage(event.target));
  });
};

const markMessage = (message) => {
  message.closest("yt-live-chat-text-message-renderer").style.backgroundColor =
    "black";
  markedMessages.push(message.getAttribute("id"));
};

setInterval(updateMessages, 100);
