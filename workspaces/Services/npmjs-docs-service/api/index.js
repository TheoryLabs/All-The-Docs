export default async (req, res) => {
  try {
    await res.json({
      service: `NpmJS Docs Service`
    })
  }
  catch(err) {
    throw err
  }
}
