const userInput = document.getElementById("user-input");
const chatArea = document.getElementById("chat");
const sendBtn = document.querySelector(".fa-paper-plane");
const form = document.getElementById("form");
const infoBtn = document.getElementById("infoBtn");

function handleSubmit(event) {
  event.preventDefault();

  if (userInput.value !== "") {
    // let userString = userInput.value;

    let newBubbleContainer = document.createElement("div");
    newBubbleContainer.classList.add(
      "chat-bubble-container",
      "user-bubble-container"
    );
    newBubbleContainer.innerHTML =
      '<div class="profile-picture"><img src="/images/user.png" height="100%" /></div>';

    let newBubble = document.createElement("div");
    newBubble.classList.add("chat-bubble", "user-bubble");
    newBubble.innerHTML = userInput.value;
    newBubbleContainer.appendChild(newBubble);
    chatArea.appendChild(newBubbleContainer);
    userInput.value = "";

    // Generate the response
    var responses = ["yes", "ok", "no", "okay", "lol"];
    var randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    msg = randomResponse;

    let newBubble2Container = document.createElement("div");
    newBubble2Container.classList.add(
      "chat-bubble-container",
      "chat-gpt-bubble-container"
    );
    newBubble2Container.innerHTML =
      '<div class="profile-picture"><img src="/images/avatar.png" height="100%" /></div>';

    let newBubble2 = document.createElement("div");
    newBubble2.classList.add("chat-bubble", "chat-gpt-bubble");
    newBubble2.innerHTML = "....";
    newBubble2Container.appendChild(newBubble2);
    chatArea.appendChild(newBubble2Container);
    form.scrollIntoView();
    let currentMsg = 0;

    let msgLoop = setInterval(() => {
      if (currentMsg < msg.length) {
        currentMsg += Math.floor(Math.random() * 10);
        newBubble2.innerHTML = msg.slice(0, currentMsg) + "█";
      } else {
        newBubble2.innerHTML = msg;
        clearInterval(msgLoop);
        userInput.focus();
      }
    }, 100);
  }
}
sendBtn.addEventListener("click", handleSubmit);
form.addEventListener("submit", handleSubmit);

const infoText = ["This site was created by Jaszi aka me UwU"];

infoBtn.addEventListener("click", handleInfoClick);

function handleInfoClick() {
  let newBubble3Container = document.createElement("div");
  newBubble3Container.classList.add(
    "chat-bubble-container",
    "jaszi-bubble-container"
  );
  newBubble3Container.innerHTML =
    '<div class="profile-picture"><img src="https://avatars.githubusercontent.com/u/79008835" height="100%" /></div>';

  function createLine(i) {
    if (i < infoText.length) {
      let newBubble3 = document.createElement("div");
      newBubble3.classList.add("chat-bubble", "jaszi-bubble");
      let currentLineText = infoText[i];
      let currentWord = 0;
      let singlelineLoop = setInterval(() => {
        if (currentWord < currentLineText.length) {
          currentWord += Math.floor(Math.random() * 10) + 5;
          newBubble3.innerHTML = currentLineText.slice(0, currentWord) + "█";
        } else {
          newBubble3.innerHTML = currentLineText;
          clearInterval(singlelineLoop);
          form.scrollIntoView();
          userInput.focus();
          createLine(i + 1);
        }
      }, 80);

      newBubble3Container.appendChild(newBubble3);
      chatArea.appendChild(newBubble3Container);
    }
  }
  createLine(0);
}
