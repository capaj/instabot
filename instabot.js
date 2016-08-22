const cp = require('child_process')

process.on('uncaughtException', (err) => {
  if (process.env.NODE_ENV === 'production') {
    throw err
  }
  const match = String(err).match(/Cannot find module '(.*)'/)
  if (match && !match[1].startsWith('.')) {
    const install = cp.spawnSync('npm', ['i', match[1], '-S'], { stdio: "inherit", encoding : 'utf8' })
    if (install.stderr) {
      console.error(install.stderr)
    }
    if (install.stdout) {
      console.log(install.stdout)
    }
  } else {
    throw err
  }
})