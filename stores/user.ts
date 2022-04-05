import {
  Model,
  model,
  modelAction,
  prop,
} from 'mobx-keystone'

@model('store/user')
export class UserStore extends Model({
  logged: prop()
}) {

  @modelAction
  logUser(){
    this.logged = !this.logged;
  }
}
