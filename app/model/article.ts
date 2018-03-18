'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';

export default class Article {
  @JsonProperty('id')
  public id: string;
  @JsonProperty('title')
  public title: string;
  @JsonProperty('summary')
  public summary: string;
  @JsonProperty('categoryId')
  public categoryId: number;
  @JsonProperty('tag')
  public tag: string;
  @JsonProperty('categoryId')
  public authorId: number;
  @JsonProperty('createTime')
  public createTime: number;
  @JsonProperty('hits')
  public hits: number;
  @JsonProperty('url')
  public url: string;
  @JsonProperty('status')
  public status: number;

  constructor() {
    this.id = void 0;
    this.title = undefined;
    this.summary = undefined;
    this.tag = undefined;
    this.hits = 0;
    this.createTime = Date.now();
  }
}