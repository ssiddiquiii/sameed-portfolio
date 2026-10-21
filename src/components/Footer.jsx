import { PROFILE } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {PROFILE.name?.toLowerCase() || 'sameed siddiqui'}</span>
      <span>{(PROFILE.location || 'karachi, pk').toLowerCase()}</span>
    </footer>
  )
}
