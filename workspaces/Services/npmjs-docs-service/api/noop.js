export default async (req, res) => {
  try {
    await res.json({
      ts: Date.now(),
      hello: `world`
    })
  }
  catch(err) {
    throw err
  }
}
