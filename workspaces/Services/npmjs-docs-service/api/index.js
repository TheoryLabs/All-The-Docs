export default async (req, res) => {
  try {
    await res.json({
      service: `NpmJS Docs Service`,
      hello: `world`
    })
  }
  catch(err) {
    throw err
  }
}
