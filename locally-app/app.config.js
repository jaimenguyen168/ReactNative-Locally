export default {
  "expo": {
    "name": "locally",
    "slug": "locally-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "userInterfaceStyle": "automatic",
    "owner": "jaime168",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "Locally uses your location to show nearby events and activities."
      },
      "config": {
        "googleMapsApiKey": process.env.GOOGLE_API_KEY
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "permissions": ["ACCESS_FINE_LOCATION"],
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_API_KEY
        }
      }
    },
    "web": {
      "bundler": "metro",
      "output": "server",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      ["expo-router", {"origin": "https://locally.com/"}],
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "5aab8167-8bac-4e09-b5e4-ba672b241c82"
      },
      "GOOGLE_API_KEY": process.env.GOOGLE_API_KEY,
      "STRIPE_PUBLISHABLE_KEY": process.env.STRIPE_PUBLISHABLE_KEY,
      "STRIPE_SECRET_KEY": process.env.STRIPE_SECRET_KEY
    }
  }
};