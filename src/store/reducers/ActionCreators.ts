import axios from "axios";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlice.actions.usersFetchingSucces(response.data));
  } catch (e) {
    dispatch(userSlice.actions.usersFetchingError(getErrorMessage(e)));
  }
};
