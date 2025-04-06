var APP_DATA = {
  "scenes": [
    {
      "id": "0-zahrada",
      "name": "zahrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0917372663184377,
        "pitch": -0.03429327002152682,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.914966325588736,
          "pitch": -0.4418490693353796,
          "rotation": 0,
          "target": "1-zavadilka"
        },
        {
          "yaw": 3.116725514840655,
          "pitch": 0.16014025366099105,
          "rotation": 0,
          "target": "2-terasa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-zavadilka",
      "name": "zavadilka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.28269653840489006,
        "pitch": 0.3976133577216423,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.019012144824653632,
          "pitch": 1.161292340704522,
          "rotation": 9.42477796076938,
          "target": "0-zahrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terasa",
      "name": "terasa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
