'use strict'
import test from 'ava'
import cp from 'child_process'

test.cb('rethrows in production, installs module in other', (t) => {
  process.on = (evName, cb) => {
    t.is(evName, 'uncaughtException')
    process.env.NODE_ENV = 'production'
    t.notThrows(() => {
      cb(new Error("Cannot find module 'koa'"))
    })
    delete process.env.NODE_ENV
    t.notThrows(() => {
      cb(new Error("random err"))
    })
    t.notThrows(() => {
      cb(new Error("Cannot find module 'koa'"))
    })
  }
  cp.spawnSync = (command, args, opts) => {
    t.is(command, 'npm')
    t.is(args[0], 'i')
    t.is(args[1], 'koa')

    t.end()
    return {
      stderr: 'stderr',
      stdout: 'stdout'
    }
  }
  require('../instabot')
})
