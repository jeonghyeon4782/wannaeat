import { create } from 'zustand';
const useReservationStore = create((set) => ({
  isLunch: true,
  reservationDate: '',
  startTime: '00:00',
  endTime: '00:00',
  memberCount: -1,
  selectedTimes: [],
  selectedCard: {},
  lunchTimes: [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
  ],
  dinnerTimes: [
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ],
  durationTimes: ['30', '60', '90', '120'],
  selectedDurationTime: '', // 머무는 시간
  selectedCategory: '', // 선택한 카테고리,
  reservationUrl: '',
  tableList: [], // 선택한 테이블
  setIsLunch: (isLunch) => set({ isLunch: isLunch }),
  setReservationDate: (date) => set({ reservationDate: date }),
  setStartTime: (time) => set({ startTime: time }),
  setEndTime: (time) => set({ endTime: time }),
  setMemberCount: (count) => set({ memberCount: count }),
  setLunchTimes: (times) => set({ lunchTimes: times }),
  setDinnerTimes: (times) => set({ dinnerTimes: times }),
  setSelectedTimes: (times) => set({ selectedTimes: times }),
  setSelectedDurationTime: (times) => set({ selectedDurationTime: times }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedCard: (card) => set({ selectedCard: card }),
  setReservationUrl: (url) => set({ reservationUrl: url }),
  setTableList: (tableList) => set({ tableList: tableList }),
  resetReservation: () =>
    set({
      isLunch: true,
      reservationDate: '',
      startTime: '00:00',
      endTime: '00:00',
      memberCount: -1,
      selectedTimes: [],
      selectedCard: {},
      lunchTimes: [
        '00:00',
        '00:30',
        '01:00',
        '01:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30',
        '04:00',
        '04:30',
        '05:00',
        '05:30',
        '06:00',
        '06:30',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
      ],
      dinnerTimes: [
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
      ],
      durationTimes: ['30', '60', '90', '120'],
      selectedDurationTime: '', // 머무는 시간
      selectedCategory: '', // 선택한 카테고리
    }),
}));

export default useReservationStore;
