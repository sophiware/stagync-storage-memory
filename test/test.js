const Memory = require('../lib').default
const driver = new Memory()

describe('Storage', () => {
  const driverKey = '@test:123'
  it('Set', function (done) {
    driver.setItem(driverKey, {name: 'it'}, (err, value) => {
      if (err) {
        return done(err)
      }

      done()
    })
  })

  it('Get', function (done) {
    driver.setItem(driverKey, {name: 'ok'}, () => {
      driver.getItem(driverKey, (err, value) => {
        if (err) {
          return done(new Error('No work'))
        }

        if (value.name === 'ok') {
          return done()
        }

        done(new Error('No work'))
      })
    })
  })

  it('Remove', function (done) {
    driver.setItem(driverKey, {name: 'it'}, () => {
      driver.removeItem(driverKey, () => {
        driver.getItem(driverKey, (err, value) => {
          if (err) {
            return done(new Error('No work'))
          }

          if (value === null) {
            return done()
          }

          done(new Error('No work'))
        })
      })
    })
  })

  it('Clear', function (done) {
    driver.setItem(driverKey, {name: 'it'}, () => {
      driver.clear(() => {
        driver.getItem(driverKey, (err, value) => {
          if (err) {
            return done(new Error('No work'))
          }

          if (value === null) {
            return done()
          }

          done(new Error('No work'))
        })
      })
    })
  })
})
