import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Selector, Select, State, StateContext } from '@ngxs/store';

import { 
    SetCurrentPostId, 
    SetCurrentPost, 
    SetCurrentUserProfile,
    SetSearchValue,
} from '../actions/layout.actions';

import { PostsModel } from 'src/app/core/models/core.models';
import { ProfileModel } from 'src/app/profile/models/profile.model';

export interface AppStateModel {
  currentPostId?: number | null;
  currentPost?: PostsModel | null;
  currentUserProfile?: ProfileModel | null;
  searchValue?: string | null;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    currentPostId: null,
    currentPost: null,
    currentUserProfile: null,
    searchValue: '',
  }
})
@Injectable()

export class AppState {
    @Selector() static postId(state: AppStateModel){ return state.currentPostId; }
    @Selector() static post(state: AppStateModel) { return state.currentPost; }
    @Selector() static currentUserProfile(state: AppStateModel) { return state.currentUserProfile; }
    @Selector() static searchValue(state: AppStateModel) { return state.searchValue; }

    @Action(SetCurrentPostId)
        setCurrentPostId(ctx: StateContext<AppStateModel>, { payload }: SetCurrentPostId) {
          const state = ctx.getState();
          ctx.setState({ ...state, currentPostId: payload})
    }

    @Action(SetCurrentPost)
        setCurrentPost(ctx: StateContext<AppStateModel>, { payload }: SetCurrentPost) {
          const state = ctx.getState();
          ctx.setState({ ...state, currentPost: payload })
    }

    @Action(SetCurrentUserProfile)
        setCurrentUserProfile(ctx: StateContext<AppStateModel>, { payload }: SetCurrentUserProfile) {
          const state = ctx.getState();
          ctx.setState({ ...state, currentUserProfile: payload })
    }

    @Action(SetSearchValue)
        setSearchValue(ctx: StateContext<AppStateModel>, { payload }: SetSearchValue) {
            const state = ctx.getState();
            ctx.setState({ ...state, searchValue: payload })
    }
}