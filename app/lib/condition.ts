'use strict';
import { JsonProperty } from '@hubcarl/json-typescript-mapper';
export default class Condition {
  @JsonProperty('title')
  public title: string;
  @JsonProperty('categoryId')
  public categoryId: number;
  @JsonProperty('tag')
  public tag: string;
  @JsonProperty('pageIndex')
  public pageIndex: number;
  @JsonProperty('pageSize')
  public pageSize: number;
  public where: object = {};
  public like: object = {};
  public orderByField: string = 'id';
  public orderBy: string = 'desc';

  constructor() {
    this.title = undefined;
    this.categoryId = undefined;
    this.tag = undefined;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.where = {};
    this.like = {};
  }
}