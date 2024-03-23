import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'

export const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className='flex items-center justify-center gap-3 py-6'>
      <button className='text-[#a1a1a1]' onClick={handlePrevPage} disabled={currentPage === 1} title='Previous page' alt='Previous page'>
        <Icon icon='icon-park-twotone:left-c' width='36' height='36' />
      </button>
      <span className='text-[#fff]'>{currentPage} of {totalPages}</span>
      <button className='text-[#a1a1a1]' onClick={handleNextPage} disabled={currentPage === totalPages} title='Next page' alt='Next page'>
        <Icon icon='icon-park-twotone:right-c' width='36' height='36' />
      </button>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired
}
