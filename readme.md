# Static Web app

An example of 

# Pre-requirements

We'll use live-server to serve our static files and Azure functions for interactivity

```bash
npm install -g live-server
npm install -g azure-functions-core-tools
```

# How to run

From the respository root open a prompt and type

```bash
npx live-server
```

To run the static web app.

```bash
cd api
npm run start
```

to run the APIs.

# What's in here

Literally, flat HTML and CSS for the web app, and TypeScript (or JavaScript) for the APIs.
You can use the Azure command line tools to add new APIs

```bash
cd api
func new -l TypeScript -t "HTTP Trigger" --name FunctionName
```

The function SDK will create an API you can call on `http://127.0.0.1:8080/api/FunctionName`
