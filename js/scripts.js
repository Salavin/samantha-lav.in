(async () => {
  await loadSlim(tsParticles);

  await tsParticles.load({
    options: {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "shape": {
                "type": "image",
                "options": {
                    "image": {
                        "src": "https://samantha-lav.in/assets/leaf.png",
                        "width": 100,
                        "height": 100,
                        "replaceColor": false
                    }
                }
            },
            "opacity": {
                "value": .8,
                "random": false,
            },
            "size": {
                "value": 20,
                "random": true,
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            },
            "rotate": {
                "direction": "random",
                "path": false,
                "value": {
                    "min": 90,
                    "max": 270
                },
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "zIndex": {
                "value": {
                    "min": 0,
                    "max": 100
                },
                "opacityRate": 6,
                "sizeRate": 6
            }
        },
        "fullscreen": {
            "enable": true,
            "zIndex": -1000
        },
    },
  });
})();

const options = {
  top: '16px',
  autoMatchOsTheme: false,
  defaultTheme: 'light',
  buttonLight: '#e8b6d3',
  buttonDark: '#fcf0f7',
  
}

const darkmode = new Darkmode(options)
darkmode.attach()