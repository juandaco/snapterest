export const SHOW_NEW_DIALOG = 'SHOW_NEW_DIALOG';
export const HIDE_NEW_DIALOG = 'HIDE_NEW_DIALOG';
export const SHOW_ABOUT_DIALOG = 'SHOW_ABOUT_DIALOG';
export const HIDE_ABOUT_DIALOG = 'HIDE_ABOUT_DIALOG';

export const showNewDialog = () => ({
  type: SHOW_NEW_DIALOG,
});

export const hideNewDialog = () => ({
  type: HIDE_NEW_DIALOG,
});

export const showAboutDialog = () => ({
  type: SHOW_ABOUT_DIALOG,
});

export const hideAboutDialog = () => ({
  type: HIDE_ABOUT_DIALOG,
});
