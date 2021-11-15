import create from 'zustand';

// Target State
export const useTarget = create((set) => ({
  targetMesh: null,
  setTargetMesh: (targetMesh) => set({ targetMesh }),

  hoveredMesh: null,
  setHoveredMesh: (hoveredMesh) => set({ hoveredMesh }),


}));

// Property States
export const useProperty = create((set) => ({
  currentColor: '#ffffff',
  setCurrentColor: (currentColor) => set({ currentColor }),

  currentShade: 'smooth',
  setCurrentShade: (currentShade) => set({ currentShade }),

  currentIntensity: 1,
  setCurrentIntensity: (currentIntensity) => set({ currentIntensity }),

  currentTransformMode: null,
  setCurrentTransformMode: (currentTransformMode) => set({ currentTransformMode }),
}))

// Scene States
export const useScene = create((set) => ({
  isGridVisible: true,
  setGrid: (isGridVisible) => set({ isGridVisible }),

  isShadowsVisible: true,
  setShadows: (isShadowsVisible) => set({ isShadowsVisible }),
}))

// Model State
export const useModel = create((set) => ({
  modelData: [],

  replaceModelData: data => {
    set(() => ({
      modelData: data,
    }))
  },

  deleteModelData: (delModel) => set((state) => {
    var newList = state.modelData;
    var index = -1;
    state.modelData.forEach((entry, i) => {
      if(entry.uuid == delModel.uuid){
        index = i;
      }  
    })
    newList.splice(index,1);
    state.modelData = newList;
  }),

  setModelData: (modelData) =>
    set((state) => ({
      modelData: [modelData, ...state.modelData],
    })),
}));

// Light State
export const useLight = create((set) => ({
  lightData: [],
  setLightData: (lightData) =>
    set((state) => ({
      lightData: [lightData, ...state.lightData],
    })),

  intensity: 1,
  setIntensity: (intensity) => set({ intensity }),

  windowInfo: {
    lightType: null,
    isWindowOpen: false,
  },
  setWindowType: (windowInfo) =>
    set((state) => {
      state.windowInfo.lightType = windowInfo;
    }),
  setWindowToggle: (windowInfo) =>
    set((state) => {
      state.windowInfo.isWindowOpen = windowInfo;
    }),
}));

// Group State
export const useGroup = create((set) => ({
  groupList: [],
  delGroupList: (delGroup) => 
    set((state) => {
      const index = state.groupList.indexOf(delGroup);
      var newList = state.groupList;
      newList.splice(index,1);
      state.groupList = newList;
  }),
    
    
  setGroupList: (groupList) =>
    set((state) => ({
      groupList: [...new Set([...state.groupList, groupList])],
    })),
}));
