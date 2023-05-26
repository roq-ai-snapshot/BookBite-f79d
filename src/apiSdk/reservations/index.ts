import axios from 'axios';
import queryString from 'query-string';
import { ReservationInterface } from 'interfaces/reservation';
import { GetQueryInterface } from '../../interfaces';

export const getReservations = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/reservations${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createReservation = async (reservation: ReservationInterface) => {
  const response = await axios.post('/api/reservations', reservation);
  return response.data;
};

export const updateReservationById = async (id: string, reservation: ReservationInterface) => {
  const response = await axios.put(`/api/reservations/${id}`, reservation);
  return response.data;
};

export const getReservationById = async (id: string) => {
  const response = await axios.get(`/api/reservations/${id}`);
  return response.data;
};
