

// ScrollTrigger está carregado!
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(".conteiner-sobre h1",
  {y: -10, opacity: 0, },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".conteiner-sobre h1", // Elemento que aciona a animação
      start: "top 55%", // Quando o topo do elemento chegar a 80% da viewport
    }
  });

  gsap.fromTo(".primeiro",
    {x: 500, opacity: 0, },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".conteiner-sobre h1", // Elemento que aciona a animação
        start: "top 50%", // Quando o topo do elemento chegar a 80% da viewport
      }
    });
  
    gsap.fromTo(".segundo",
      {x: -300, opacity: 0, },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".conteiner-sobre h1", // Elemento que aciona a animação
          start: "top 30%", // Quando o topo do elemento chegar a 80% da viewport
        }
      });
      gsap.fromTo(".terceiro",
        {x: 500, opacity: 0, },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".conteiner-sobre h1", // Elemento que aciona a animação
            start: "top 20%", // Quando o topo do elemento chegar a 80% da viewport
          }
        });
        gsap.fromTo(".quarto",
          {x: -300, opacity: 0, },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: ".conteiner-sobre h1", // Elemento que aciona a animação
              start: "top 5%", // Quando o topo do elemento chegar a 80% da viewport
            }
          });