import { BadgePresenter, Present } from '../../badges.js'

export default new (class implements BadgePresenter {
  url = new URL(import.meta.url)
  tiers = true
  badges = [
    'github-anniversary-5',
    'github-anniversary-10',
    'github-anniversary-15',
    'github-anniversary-20',
  ] as const
  present: Present = (data, grant) => {
    const createdAt = new Date(data.user.createdAt)
    const now = Date.now()

    this.badges.forEach((badge, i) => {
      const years = +badge.slice(19)
      if (
        now >=
        new Date(
          createdAt.getFullYear() + years,
          createdAt.getMonth(),
          createdAt.getDay(),
        ).valueOf()
      ) {
        grant(badge, `I joined GitHub ${years} years ago.`).tier(i)
      }
    })
  }
})()
