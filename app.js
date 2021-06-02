const express = require("express");
const app = express();
const port = 3000;
const proto = "http";

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const ips = {}

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!ips[name]) {
                ips[name] = [];
            }
            ips[name].push(net.address);
        }
    }
}

app.use(express.static("build"));

app.listen(port, () => {
  console.log(
    Object.entries(ips)
      .map(([net, addrs]) => {
        return net + "\n" + addrs.map(a => `${proto}://${a}:${port}`).join("\n");
      }).join("\n\n")
  );
});


