import {create} from 'zustand'

export const useMaximizeScreen = create((set) => ({
    screenFull  :  false,
    maximizeHandler :  () => set(() => ({screenFull : true})),
    minimizeHandler:  () => set(() => ({screenFull : false}))
 }))

 export const usePlayVideo = create((set) => ({
    play  :  false,
    makePlayHanlder :  () => set(() => ({play : true})),
    makePauseHandler:  () => set(() => ({play : false}))
 }))

