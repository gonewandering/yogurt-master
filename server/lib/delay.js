module.exports = async function (ms) {
  return new Promise((suc, cat) => {
    setTimeout(suc, ms)
  })
}
