{
  "envId": "{{envId}}",
  "framework": {
    "plugins": {
      "client": {
        "use": "@cloudbase/framework-plugin-website",
        "inputs": {
          "installCommand": "npm install --prefer-offline --no-audit --progress=false",
          "buildCommand": "npm run docs:build",
          "outputPath": "docs-dist",
          "cloudPath": "/",
          "ignore": [".git", ".github", "node_modules", "cloudbaserc.js"]
        }
      }
    }
  }
}
