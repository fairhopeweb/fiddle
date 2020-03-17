export type WindowNames = 'main';

export type Files = Map<string, string>;

export type FileTransform = (files: Files) => Promise<Files>;

export enum VersionState {
  ready = 'ready',
  downloading = 'downloading',
  unknown = 'unknown'
}

export enum VersionSource {
  remote = 'remote',
  local = 'local'
}
export interface Version {
  version: string;
  name?: string;
  localPath?: string;
}

export interface EditorValues {
  main: string;
  renderer: string;
  html: string;
  preload: string;
  css: string;
  package?: string;
}

export interface RunnableVersion extends Version {
  state: VersionState;
  source: VersionSource;
}

export interface SetFiddleOptions {
  filePath?: string;
  templateName?: string;
  gistId?: string;
}

export interface OutputEntry {
  text: string;
  timestamp: number;
  isNotPre?: boolean;
}

export interface OutputOptions {
  bypassBuffer?: boolean;
  isNotPre?: boolean;
}

export interface GenericDialogOptions {
  type: GenericDialogType;
  ok?: string;
  cancel?: string;
  label: string;
}

export interface Templates {
  [index: string]: string | Templates;
}

export const enum GenericDialogType {
  'confirm' = 'confirm',
  'warning' = 'warning',
  'success' = 'success',
}

// Editors
export const enum EditorId {
  'main' = 'main',
  'renderer' = 'renderer',
  'html' = 'html',
  'preload' = 'preload',
  'css' = 'css'
}

// Panels that can show up as a mosaic
export const enum PanelId {
  'docsDemo' = 'docsDemo'
}

export type MosaicId = EditorId | PanelId;

export const ALL_EDITORS = [EditorId.main, EditorId.renderer, EditorId.preload, EditorId.html, EditorId.css];
export const ALL_PANELS = [PanelId.docsDemo];
export const ALL_MOSAICS = [...ALL_EDITORS, ...ALL_PANELS];

export type ArrowPosition = 'top' | 'left' | 'bottom' | 'right';

export const enum DocsDemoPage {
  DEFAULT = 'DEFAULT',
  DEMO_APP = 'DEMO_APP'
}
