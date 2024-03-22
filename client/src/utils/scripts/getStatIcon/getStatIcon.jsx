import { Icon } from '@iconify/react'

export const getStatIcon = (statName) => {
  switch (statName) {
    case 'hp':
      return (
        <div title='Health Points' aria-label='Health Points'>
          <Icon icon='icon-park-outline:heart-rate' width='24' />
        </div>
      )
    case 'attack':
      return (
        <div title='Attack' aria-label='Attack'>
          <Icon icon='charm:sword' width='24' />
        </div>
      )
    case 'defense':
      return (
        <div title='Defense' aria-label='Defense'>
          <Icon icon='ri:shield-cross-line' width='24' />
        </div>
      )
    case 'special-attack':
      return (
        <div title='Special Attack' aria-label='Special Attack'>
          <Icon icon='lucide:swords' width='24' />
        </div>
      )
    case 'special-defense':
      return (
        <div title='Special Defense' aria-label='Special Defense'>
          <Icon icon='ri:shield-star-line' width='24' />
        </div>
      )
    case 'speed':
      return (
        <div title='Speed' aria-label='Speed'>
          <Icon icon='material-symbols:sprint-rounded' width='24' />
        </div>
      )
    default:
      return null
  }
}
