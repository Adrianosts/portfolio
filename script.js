// Configuração chave pública EmailJS.
(function () {
  emailjs.init({
    publicKey: "yqMqZKFKir4lTSgwL",
  });
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseMessage = document.getElementById("responseMessage");
    const button = this.querySelector("button");

    if (name === "" || email === "" || message === "") {
      responseMessage.textContent = "Por favor, preencha todos os campos.";
      responseMessage.style.color = "red";
      return;
    }

    button.disabled = true;
    button.textContent = "Enviando...";

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_xmk5m28", "template_rf0e619", templateParams)
      .then(() => {
        responseMessage.textContent = "Mensagem enviada com sucesso!";
        responseMessage.style.color = "green";

        document.getElementById("contactForm").reset();
      })
      .catch(() => {
        responseMessage.textContent =
          "Erro ao enviar mensagem. Tente novamente.";
        responseMessage.style.color = "red";
      })
      .finally(() => {
        button.disabled = false;
        button.textContent = "Enviar Mensagem";
      });
  });

// Animação por trás de todo o conteúdo.
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffffff",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00a3ff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});


