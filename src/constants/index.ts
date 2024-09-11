import { IInfoState } from "../components/Form/form.types";
import {v4 as uuidV4} from 'uuid';

export const initialInfoState : IInfoState = {
    id: uuidV4(),
    category: 1,
    activity: "",
    calories: 0,
}