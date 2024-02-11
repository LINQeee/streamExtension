let messages = document.querySelectorAll("yt-live-chat-text-message-renderer");

messages.forEach((message) => {
  message.addEventListener("dblclick", (event) => {
    event.target.closest(
      "yt-live-chat-text-message-renderer"
    ).style.backgroundColor = "red";
    console.log("clicked");
  });
});
