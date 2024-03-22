export const getTypeColor = (typeName) => {
  switch (typeName) {
    case 'normal':
      return (
        <div title='normal' aria-label='normal' className='bg-[#A8A77A] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'fire':
      return (
        <div title='fire' aria-label='fire' className='bg-[#EE8130] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'water':
      return (
        <div title='water' aria-label='water' className='bg-[#6390F0] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'electric':
      return (
        <div title='electric' aria-label='electric' className='bg-[#F7D02C] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'grass':
      return (
        <div title='grass' aria-label='grass' className='bg-[#78C850] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'ice':
      return (
        <div title='ice' aria-label='ice' className='bg-[#98D8D8] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'fighting':
      return (
        <div title='fighting' aria-label='fighting' className='bg-[#C22E28] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'poison':
      return (
        <div title='poison' aria-label='poison' className='bg-[#A040A0] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'ground':
      return (
        <div title='ground' aria-label='ground' className='bg-[#E2BF65] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'flying':
      return (
        <div title='flying' aria-label='flying' className='bg-[#A890F0] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'psychic':
      return (
        <div title='psychic' aria-label='psychic' className='bg-[#F95587] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'bug':
      return (
        <div title='bug' aria-label='bug' className='bg-[#A6B91A] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'rock':
      return (
        <div title='rock' aria-label='rock' className='bg-[#B6A136] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'ghost':
      return (
        <div title='ghost' aria-label='ghost' className='bg-[#735797] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'dragon':
      return (
        <div title='dragon' aria-label='dragon' className='bg-[#6F35FC] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'dark':
      return (
        <div title='dark' aria-label='dark' className='bg-[#705746] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'steel':
      return (
        <div title='steel' aria-label='steel' className='bg-[#B7B7CE] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'fairy':
      return (
        <div title='fairy' aria-label='fairy' className='bg-[#D685AD] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    case 'stellar':
      return (
        <div title='stellar' aria-label='stellar' className='bg-[#FFD700] w-fit px-2 rounded-sm'>{typeName}</div>
      )
    default:
      return null
  }
}
