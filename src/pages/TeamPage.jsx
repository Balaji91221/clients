import React from 'react'
import Team from '../components/Team/Team'
import Member from '../components/Team/tesm'
import Advisory from '../components/Team/AdvisoryCommitteeDetails'
function TeamPage() {
  return (
    <div className='bg-zinc-50 '>
      <Team />

      <Member  />
      <Advisory />
    </div>
  )
}

export default TeamPage
