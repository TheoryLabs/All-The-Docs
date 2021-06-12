const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')


module.exports = (phase) => {

  const buildPhase = process.env.BUILD_PHASE

  const isDev = phase === PHASE_DEVELOPMENT_SERVER && buildPhase === `development`
  const isStaging = phase === PHASE_PRODUCTION_BUILD && buildPhase === `staging`
  const isProd = phase === PHASE_PRODUCTION_BUILD && buildPhase === `production`

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return 'http://localhost:4000/speakers'
      if (isProd) {
        return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
      }
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    RESTURL_SESSIONS: (() => {
      if (isDev) return 'http://localhost:4000/sessions'
      if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
  }

  // next.config.js object
  return {
    env,
  }
}
