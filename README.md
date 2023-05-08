# monitoring-frontend

Steps to run this repository -

1. Make sure you have npm installed in your system
2. Run `npm install`
3. Replace the server array contents in endpoints.js with the actual endpoints of the servers you want to monitor
4. Run `npm start` and the server should be up at - http://localhost:3000

Steps to obtain metrics -

1. Make sure the server is up and running
2. Run `npm install -g lighthouse`
3. Run `lighthouse http://localhost:3000`. This will create an HTML file with the metrics dashboard.
4. To obtain the react flamegraph metrics, follow this guide - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
