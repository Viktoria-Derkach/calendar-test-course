import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/Calendar'
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event:FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events} =  useTypedSelector(state => state.event);
  const { user} = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username);
  }, [])

  const addNewEvent = (event: IEvent) => {
    setIsModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setIsModalVisible(true)}>Add event</Button>
      </Row>
      <Modal title="Add Event" visible={isModalVisible} footer={null}  onCancel={() => setIsModalVisible(false)}>
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Event
