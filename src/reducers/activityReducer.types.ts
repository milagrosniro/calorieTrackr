import { IInfoState } from "../components/Form/form.types"
import { IInfo } from "../data/categories"

export type ActivityActions = { type: 'saveActivity', payload: {newActivity: IInfo}} | 
{ type: 'setActiveId',  payload: {id: IInfo['id']} } |
{ type: 'deleteActivity',  payload: {id: IInfo['id']} } |
{ type: 'uploadInfoForm', payload:{info: IInfoState}} |
{ type: 'resetAll' }

export type ActivityState = {
    activities: IInfo[],
    activeId: IInfo['id'],
    infoForm: IInfoState
}
