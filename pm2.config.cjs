/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
const cfg = require('yunzaijs/pm2')
const app = cfg.apps[0]
app.script = 'node lib/main.js'
module.exports = {
  apps: [app]
}
