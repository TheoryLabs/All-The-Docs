export default async (req, res) => {
  try {
    let buildPhase = await process.env.BUILD_PHASE
    
    await res.json({
      service: `NpmJS Docs Service`,
      hello: `world`,
      phase: await buildPhase
    })
  }
  catch(err) {
    throw err
  }
}
