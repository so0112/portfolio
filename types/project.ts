export interface Projects {
  object: string;
  results?: ResultsEntity[] | null;
  next_cursor?: null;
  has_more: boolean;
  type: string;
  page: Page;
}
export interface ResultsEntity {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedByOrLastEditedBy;
  last_edited_by: CreatedByOrLastEditedBy;
  cover: Cover;
  icon?: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}
export interface CreatedByOrLastEditedBy {
  object: string;
  id: string;
}
export interface Cover {
  type: string;
  external: Url;
  file: Url;
}
export interface Url {
  url: string;
}
export interface Parent {
  type: string;
  database_id: string;
}
export interface Properties {
  Github: Github;
  Deploy: Deploy;
  Description: Description;
  Period: Period;
  Tags: Tags;
  Name: Name;
}
export interface Github {
  id: string;
  type: string;
  url?: string;
}

export interface Deploy {
  id: string;
  type: string;
  url: string;
}
export interface Description {
  id: string;
  type: string;
  rich_text: RichTextEntityOrTitleEntity[];
}
export interface RichTextEntityOrTitleEntity {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: null;
}
export interface Text {
  content: string;
  link?: null;
}
export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}
export interface Period {
  id: string;
  type: string;
  date: Date;
}
export interface Date {
  start: string;
  end: string;
  time_zone?: null;
}
export interface Tags {
  id: string;
  type: string;
  multi_select?: (MultiSelectEntity | null)[] | null;
}
export interface MultiSelectEntity {
  id: string;
  name: string;
  color: string;
}
export interface Name {
  id: string;
  type: string;
  title: RichTextEntityOrTitleEntity1[];
}
export interface RichTextEntityOrTitleEntity1 {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: null;
}
export interface Page {}
