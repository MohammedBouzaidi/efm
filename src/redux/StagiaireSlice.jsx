import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    nom: "saifonnar",
    prenom: "3asbos",
    filliere: "DD2",
    image: "https://picsum.photos/id/237/200/300",
  },
];

const stagiaireSlice = createSlice({
  name: "stagiaire",
  initialState,

  reducers: {
    AjouterStagiaire: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default stagiaireSlice.reducer;
export const { AjouterStagiaire } = stagiaireSlice.actions;
