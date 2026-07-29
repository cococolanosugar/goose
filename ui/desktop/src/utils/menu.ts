import { defineMessages } from 'react-intl';

const menuDescriptors = defineMessages({
  file: { id: 'menu.file', defaultMessage: 'File' },
  edit: { id: 'menu.edit', defaultMessage: 'Edit' },
  view: { id: 'menu.view', defaultMessage: 'View' },
  window: { id: 'menu.window', defaultMessage: 'Window' },
  help: { id: 'menu.help', defaultMessage: 'Help' },
  newChat: { id: 'menu.newChat', defaultMessage: 'New Chat' },
  newChatWindow: { id: 'menu.newChatWindow', defaultMessage: 'New Chat Window' },
  openDirectory: { id: 'menu.openDirectory', defaultMessage: 'Open Directory...' },
  recentDirectories: { id: 'menu.recentDirectories', defaultMessage: 'Recent Directories' },
  settings: { id: 'menu.settings', defaultMessage: 'Settings' },
  find: { id: 'menu.find', defaultMessage: 'Find' },
  findWithEllipsis: { id: 'menu.findWithEllipsis', defaultMessage: 'Find\u2026' },
  findNext: { id: 'menu.findNext', defaultMessage: 'Find Next' },
  findPrevious: { id: 'menu.findPrevious', defaultMessage: 'Find Previous' },
  useSelectionForFind: { id: 'menu.useSelectionForFind', defaultMessage: 'Use Selection for Find' },
  alwaysOnTop: { id: 'menu.alwaysOnTop', defaultMessage: 'Always on Top' },
  toggleNavigation: { id: 'menu.toggleNavigation', defaultMessage: 'Toggle Navigation' },
  aboutGoose: { id: 'menu.aboutGoose', defaultMessage: 'About Goose' },
  newWindow: { id: 'menu.newWindow', defaultMessage: 'New Window' },
  focusGooseWindow: { id: 'menu.focusGooseWindow', defaultMessage: 'Focus Goose Window' },
  quickLauncher: { id: 'menu.quickLauncher', defaultMessage: 'Quick Launcher' },
  addToDictionary: { id: 'menu.addToDictionary', defaultMessage: 'Add to dictionary' },
  roleUndo: { id: 'menu.role.undo', defaultMessage: 'Undo' },
  roleRedo: { id: 'menu.role.redo', defaultMessage: 'Redo' },
  roleCut: { id: 'menu.role.cut', defaultMessage: 'Cut' },
  roleCopy: { id: 'menu.role.copy', defaultMessage: 'Copy' },
  rolePaste: { id: 'menu.role.paste', defaultMessage: 'Paste' },
  rolePasteAndMatchStyle: {
    id: 'menu.role.pasteAndMatchStyle',
    defaultMessage: 'Paste and Match Style',
  },
  roleDelete: { id: 'menu.role.delete', defaultMessage: 'Delete' },
  roleSelectAll: { id: 'menu.role.selectAll', defaultMessage: 'Select All' },
  roleStartSpeaking: { id: 'menu.role.startSpeaking', defaultMessage: 'Start Speaking' },
  roleStopSpeaking: { id: 'menu.role.stopSpeaking', defaultMessage: 'Stop Speaking' },
  roleClose: { id: 'menu.role.close', defaultMessage: 'Close' },
  roleReload: { id: 'menu.role.reload', defaultMessage: 'Reload' },
  roleForceReload: { id: 'menu.role.forceReload', defaultMessage: 'Force Reload' },
  roleToggleDevTools: { id: 'menu.role.toggleDevTools', defaultMessage: 'Toggle Developer Tools' },
  roleResetZoom: { id: 'menu.role.resetZoom', defaultMessage: 'Actual Size' },
  roleZoomIn: { id: 'menu.role.zoomIn', defaultMessage: 'Zoom In' },
  roleZoomOut: { id: 'menu.role.zoomOut', defaultMessage: 'Zoom Out' },
  roleToggleFullscreen: { id: 'menu.role.togglefullscreen', defaultMessage: 'Toggle Full Screen' },
  roleMinimize: { id: 'menu.role.minimize', defaultMessage: 'Minimize' },
  roleZoom: { id: 'menu.role.zoom', defaultMessage: 'Zoom' },
  roleFront: { id: 'menu.role.front', defaultMessage: 'Bring All to Front' },
  roleServices: { id: 'menu.role.services', defaultMessage: 'Services' },
  roleHide: { id: 'menu.role.hide', defaultMessage: 'Hide Goose' },
  roleHideOthers: { id: 'menu.role.hideOthers', defaultMessage: 'Hide Others' },
  roleUnhide: { id: 'menu.role.unhide', defaultMessage: 'Show All' },
  roleQuit: { id: 'menu.role.quit', defaultMessage: 'Quit' },
});

export const MENU_DEFAULTS: Record<string, string> = {};
for (const { id, defaultMessage } of Object.values(menuDescriptors)) {
  if (id && defaultMessage) MENU_DEFAULTS[id] = defaultMessage;
}

const MENU_LOCALES = new Set([
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'id',
  'ms',
  'vi',
  'hi',
  'ja',
  'ko',
  'ru',
  'tr',
  'zh-CN',
  'zh-TW',
]);

export function resolveMenuLocale(raw: string | undefined): string {
  if (!raw) return 'en';
  const tag = raw.replace(/_/g, '-');
  const lower = tag.toLowerCase();
  if (/^zh-(hant|tw|hk|mo)(-|$)/.test(lower)) return 'zh-TW';
  if (lower === 'zh' || lower.startsWith('zh-')) return 'zh-CN';
  if (MENU_LOCALES.has(tag)) return tag;
  const base = tag.split('-')[0];
  if (MENU_LOCALES.has(base)) return base;
  return 'en';
}
