import {  createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/config';


export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (userId: string) => {
    const q = query(collection(db, 'users', userId, 'notifications'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);