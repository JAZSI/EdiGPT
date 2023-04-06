document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("user-input");
  const chatArea = document.getElementById("chat");
  const sendBtn = document.querySelector(".fa-paper-plane");
  const form = document.getElementById("form");
  const infoBtn = document.getElementById("infoBtn");
  const infoZone = document.querySelector(".info-zone");

  function handleSubmit(event) {
    event.preventDefault();

    if (userInput.value !== "") {
      infoZone.classList.add("hide");

      let userString = userInput.value;

      let newBubbleContainer = document.createElement("div");
      newBubbleContainer.classList.add(
        "chat-bubble-container",
        "user-bubble-container"
      );
      newBubbleContainer.innerHTML =
        '<div class="profile-picture"><img src="/assets/images/user.png" height="100%" /></div>';

      let newBubble = document.createElement("div");
      newBubble.classList.add("chat-bubble", "user-bubble");
      newBubble.innerHTML = userInput.value;
      newBubbleContainer.appendChild(newBubble);
      chatArea.appendChild(newBubbleContainer);
      userInput.value = "";

      // Generate the response
      let msg = "";
      if (
        userString.replace(/[\.,!?]/g, "").toLowerCase() ==
        "explain quantum computing in jaszi terms"
      ) {
        msg =
          "Well hello there, Jaszi! Quantum Jaszi is like when you have a really, really tiny Jaszi that can be in two places at the same time. It's like magic, but with science! Imagine you're in two different places at once, that's what quantum Jaszi is like. Don't worry if you don't understand it, Jaszi, even the smartest Jaszis in the world have a hard time wrapping their Jaszi brains around it.";
      } else if (
        userString.replace(/[\.,!?]/g, "").toLowerCase() ==
        "got any creative ideas for a jaszi years old birthday"
      ) {
        msg =
          "Why hello there, Jaszi! I've got just the perfect idea for your birthday celebration! You should have a party where everyone dresses up like Jaszis! That's right, Jaszis of all shapes and sizes. You can have a Jaszi cake, Jaszi balloons, and even play pin the tail on the Jaszi! It'll be a howling good time! And if you're feeling extra adventurous, you can even have a Jaszi petting zoo. Who wouldn't want to cuddle with a bunch of fluffy Jaszis on their birthday? Trust me, Jaszi, your party will be the bark of the town!";
      } else if (
        userString.replace(/[\.,!?]/g, "").toLowerCase() ==
        "how do i make an http request in jasziscript"
      ) {
        msg =
          "Oh boy, Jaszi! Making an HTTP request in Jasziscript is easy as pie. All you gotta do is just bark really loud and hope the internet hears you. Woof woof woof! And just like that, your request is sent and you'll get a response in no time. Okay, maybe that's not exactly how it works, but hey, it's worth a shot, right?";
      } else {
        const responses = ["yes", "ok", "no", "okay", "lol"];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        msg = randomResponse;
      }

      let newBubble2Container = document.createElement("div");
      newBubble2Container.classList.add(
        "chat-bubble-container",
        "chat-gpt-bubble-container"
      );
      newBubble2Container.innerHTML =
        '<div class="profile-picture"><img src="/assets/images/avatar.png" height="100%" /></div>';

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

  const infoText = [
    "Hello UwU~ I'm Jaszi!",
    "Behold!!! EdiGPT!!!! (I tried my best to replicate the layout and design of ChatGPT)",
    "It's not the same as the actual chatGPT tho it won't help you with any questions.",
    'This website is based on my friend (She also did the profile artwork for the "bot")',
    "I hope you enjoy the website!",
  ];

  infoBtn.addEventListener("click", handleInfoClick);

  function handleInfoClick() {
    infoZone.classList.add("hide");

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
});
