import { Button, Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { rules } from '../utils/rules'

const LoginForm:FC = () => {
  const dispatch  = useDispatch()
  const { error, isLoading, isAuth} = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useActions()
  const submit = () => {
   login(username, password)

  }
  return (
    <Form
    onFinish={submit}
      // onFinishFailed={onFinishFailed}
    >
      {error && <div style={{color: 'red'}}>
        {error}
      </div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
