import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly image: string;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly bed: number;
  readonly bedroom: number;
  readonly maxGuests: number;
  readonly oldPrice?: number;
  readonly newPrice: number;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}