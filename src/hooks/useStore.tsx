import { create } from 'zustand'


export type UserType = {
  
}

export type StateType = {
  user: null | UserType
  setUser: (user: UserType) => void
}


const useStore = create<StateType>(set => ({
  user: null,
  setUser: (user: UserType) => set({ user: user }),
}))


export default useStore
