import type {Rule} from 'sanity'

/**
 * Achtergrond-/loopvideo's worden als <video> afgespeeld (zonder player).
 * Daarvoor is een directe link naar een videobestand nodig, geen Vimeo-pagina.
 */
export const directVideoUrlDescription =
  'Direct link to a video file (MP4), shown as a muted loop without player. ' +
  'Vimeo: open the video › Share / Distribution › "Video file links" and copy the 1080p link ' +
  '(https://player.vimeo.com/progressive_redirect/playback/…/file.mp4?…). ' +
  'A page link such as https://vimeo.com/123456789 does not work here.'

const isVimeoPageUrl = (url: URL) => {
  const host = url.hostname.replace(/^www\./, '')
  if (host === 'vimeo.com') return true
  return host === 'player.vimeo.com' && url.pathname.startsWith('/video/')
}

const isYoutubeUrl = (url: URL) => /(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(url.hostname)

export const directVideoUrlValidation = (rule: Rule) =>
  rule.custom((value: unknown) => {
    if (typeof value !== 'string' || !value.trim()) return true
    let url: URL
    try {
      url = new URL(value.trim())
    } catch {
      return 'This is not a valid URL.'
    }
    if (url.protocol !== 'https:') return 'Use an https:// link.'
    if (isVimeoPageUrl(url)) {
      return 'This is a Vimeo page or player link. Use the direct "video file link" instead (…/progressive_redirect/…/file.mp4?…).'
    }
    if (isYoutubeUrl(url)) {
      return 'YouTube links cannot be used here. Put the video on Vimeo and use its direct video file link.'
    }
    return true
  })
