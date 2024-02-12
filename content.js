let mouseDown = false;
let markedMessages = [];

document.addEventListener("mousedown", () => (mouseDown = true));
document.addEventListener("mouseup", () => (mouseDown = false));

const updateMessages = () => {
  let messages = document.querySelectorAll(
    "yt-live-chat-text-message-renderer"
  );

  messages.forEach((message) => {
    if (markedMessages.some((id) => id === message.getAttribute("id")))
      markMessage(message);
    if (message.hasAttribute("data-marked")) return;
    message.addEventListener(
      "click",
      (event) => event.stopImmediatePropagation(),
      true
    );
    message.addEventListener("mouseenter", enterMouseOnMessage);
    message.addEventListener("dblclick", (event) => markMessage(event.target));
  });
};

const enterMouseOnMessage = (event) => {
  if (!mouseDown) return;
  markMessage(event.target);
};

const markMessage = (message) => {
  const chatMessage = message.closest("yt-live-chat-text-message-renderer");
  if (chatMessage.hasAttribute("data-marked")) return;
  chatMessage.setAttribute("data-marked", true);
  chatMessage.style.backgroundColor = "black";
  window.getSelection().empty();
  markedMessages.push(message.getAttribute("id"));
  console.log("added");
};

setInterval(updateMessages, 100);
