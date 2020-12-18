import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
    <section>
        <Sidebar/>
        <Tasks/>
    </section>
)
