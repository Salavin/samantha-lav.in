(async () => {
  await loadSlim(tsParticles);

  await tsParticles.load({
    options: {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#f78dcd"
            },
            "shape": {
                "type": "edge",
                "stroke": {
                    "width": 1,
                    "color": "#f78dcd"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 1,
                "random": false,
            },
            "size": {
                "value": 5,
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
        // "interactivity": {
        //     "detectsOn": "window",
        //     "events": {
        //         "onClick": {
        //             "enable": true,
        //             "mode": "push",
        //         }
        //     },
        //     "modes": {
        //         "push": {
        //             "quantity": 1
        //         }
        //     }
        // },
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