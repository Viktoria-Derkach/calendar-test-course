import { Layout, Menu, Row } from 'antd'
import type { MenuProps } from 'antd';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';



const Navbar:FC = () => {
  const dispatch  = useDispatch()
  const {isAuth, user} = useTypedSelector(state => state.auth);
  const navigate = useNavigate();
  const {logout} = useActions()

  const items1: MenuProps['items'] = ['Login'].map(key => ({
    key,
    label: `nav ${key}`,
    onClick: () => navigate(RoutesNames.LOGIN, { replace: true })
  }));

  return (
    <Layout.Header >
      <Row justify='end'>
        {isAuth
          ?
          <>
          <div style={{color: 'white'}}>
              {user.username}
          </div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                  onClick={() => logout()}
                  key={1}
              >
                  logout
              </Menu.Item>
          </Menu>
          </>

           :    <Menu theme="dark" mode="horizontal" selectable={false}>
           <Menu.Item
               onClick={() => navigate(RoutesNames.LOGIN)}
               key={1}
           >
               fgdfg
           </Menu.Item>
       </Menu>

           }

      </Row>


  </Layout.Header>
  )
}

export default Navbar
