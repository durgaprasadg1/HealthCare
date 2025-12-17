'use client'
import React from 'react'
import { useParams } from 'next/navigation'
const ParticularQueryOfHealth = () => {
    const {citizenid, queryid} = useParams();
  return (<>
    <div>Particular Query Of Health : {queryid} for citizen with id :  {citizenid}</div>
    also for getting  full data about query its state solved or not 
    </>
  )
}

export default ParticularQueryOfHealth