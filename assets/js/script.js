let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.com/users/926723912690196490';
      break;
    case 'github':
      url = 'https://github.com/YSteelX';
      break;
    case 'twitter':
      url = 'https://twitter.com/YSteelX1';
      break;
    case 'info':
      url = 'https://ysteelx.tk/about.html';
      break;
  }

  window.open(url);
}

function typerStartTyping(typer) {
  typer.reset();

  let text = ['JavaScript' ,'Python','Node.JS'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'YSteelX Was Here...';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });

  ['background', 'rain'].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio')
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none'
    
    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });
    audioElement.play();
  });
}

function startIntroTyping() {
  switchScreen()
  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}
document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  switchScreen()
});
console.log("U2VsaW4gPDMgWXVzdWY=")
