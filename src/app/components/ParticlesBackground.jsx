"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded successfully:", container);
    console.log("Number of particles:", container.particles?.count);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 8,
          },
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#f8f8f8", "#ffffff", "#fafafa", "#ffffff"],
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 400,
          },
          value: 300,
        },
        opacity: {
          value: { min: 0.5, max: 0.9 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle", "square", "polygon", "star"],
          polygon: {
            sides: 6,
          },
          star: {
            sides: 5,
          },
        },
        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Back to behind content
        pointerEvents: "none", // Don't interfere with interactions
      }}
    />
  );
}