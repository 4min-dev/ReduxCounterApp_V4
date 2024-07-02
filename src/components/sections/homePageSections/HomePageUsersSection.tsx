import React from 'react'
import '../../../style/css/sections/usersSection/userSection.css'
import List from '../../UI/lists/List'
import { UserList } from '../../UI/lists/userList/UserList'
import { IUser } from '../../../ts/interfaces/users/IUser'
import { ContentLoader } from '../../UI/loaders/ContentLoader'
import { ErrorInterface } from '../../UI/errors/ErrorInterface'
import { GreenStyleButton } from '../../UI/buttons/GreenStyleButton'
import { fetchAPI } from '../../../redux/services/fetchAPI'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export const HomePageUsersSection:React.FC = () => {

  let [isReadyToLoad,setReadyStatus] = React.useState(false)

  const {data:users,error,isLoading} = fetchAPI.useGetUsersQuery('', {
    skip:!isReadyToLoad
  })

  const loadUsers = () => setReadyStatus(true)

  function getErrorMessage(error:FetchBaseQueryError | SerializedError):string {

    if('status' in error) {
      return `Error with status ${error.status}`
    } else if('message' in error) {
      return `Error - ${error.message}`
    } else {
      return 'An unknown error occurred'
    }
  }

  return (
    <section className='homePageUsersSection'>
      { isLoading && <ContentLoader/> }
      { error && <ErrorInterface error={getErrorMessage(error)}/> }
      {
         users
         ? <List listContainerName={'userListContainer'} items={users} renderItem={(user:IUser) => <UserList user={user} key={user.id}/>}/> 
         : <GreenStyleButton handleClick={loadUsers} buttonText='Load clients'/>
      }
    </section>
  )
}