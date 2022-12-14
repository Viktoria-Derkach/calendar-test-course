import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { privateRoutes, publicRoutes, RoutesNames } from '../router'

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth);

  return (
    isAuth
    ?
      <Routes>
      {privateRoutes.map(route =>
        <Route path={route.path}  element={<route.component />} key={route.path} />
        )}
        <Route path="*" element={<Navigate to ={RoutesNames.EVENT} />}/>
      </Routes>
    :
      <Routes>
         {publicRoutes.map(route =>
           <Route path={route.path}  element={<route.component />} key={route.path} />
        )}
        <Route path="*" element={<Navigate to ={RoutesNames.LOGIN} />}/>
      </Routes>
  )
}

export default AppRouter
