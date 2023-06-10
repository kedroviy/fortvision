import { PostsModel } from 'src/app/core/models/core.models';
import { ProfileModel } from 'src/app/profile/models/profile.model';

export class SetCurrentPostId {
    static readonly type = '[Post] Get Post Id';
    constructor(public payload: number) {}
}

export class SetCurrentPost {
  static readonly type = '[Post] Set Post';
  constructor(public payload: PostsModel) {}
}

export class SetCurrentUserProfile {
  static readonly type = '[Profile] Set Current Profile';
  constructor(public payload: ProfileModel) {}
}

export class SetSearchValue {
  static readonly type = '[Search] Set Search Value';
  constructor(public payload: string) {}
}
