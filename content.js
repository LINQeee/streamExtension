let messages = document.querySelectorAll("yt-live-chat-text-message-renderer");
let mouseDown = false;

document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));

messages.forEach((message) => {
  message.addEventListener("mouseenter", (event) => {
    if (!mouseDown) return;
    markMessage(event.target);
  });

  message.addEventListener("dblclick", (event) => markMessage(event.target));
});

const markMessage = (message) =>
  (message.closest("yt-live-chat-text-message-renderer").style.backgroundColor =
    "black");
